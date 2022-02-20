/* eslint-disable no-lone-blocks */
const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const {
  addToArray,
  getNthElement,
  arrayToCSVString,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('./lib/arrays');
const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');
const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const app = express();
app.use(express.json()); // allows access to any JSON data sent to your application by referncing req.body

// STRINGS

app.get('/strings/hello/:string', function(req, res) {
  res.status(200).json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', function(req, res) {
  res.status(200).json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', function(req, res) {
  res.status(200).json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  const { string } = req.params; // const string = req.params.string;
  const { length } = req.query;
  if (!length) {
    res.status(200).json({ result: firstCharacter(req.params.string.charAt(0)) });
  } else {
    res.status(200).json({ result: firstCharacters(string, Number(length)) });
  }
  // res.status(200).json({ result: firstCharacters(string, length) });
});
// Testing on postman
// http://localhost:3000/strings/first-characters/hello?length=4
// result: hell

// NUMBERS Addition & Subtraction

const checkNumbersFromParameters = ({ a, b }, res, func) => {
  if (Number.isNaN(parseInt(a)) || Number.isNaN(parseInt(b))) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    return func ? add(parseInt(a), parseInt(b)) : subtract(parseInt(b), parseInt(a));
  }
};

app.get('/numbers/add/:paramNum1/and/:paramNum2', (req, res) => {
  const result = checkNumbersFromParameters(
    { a: req.params.paramNum1, b: req.params.paramNum2 },
    res,
    true, // calls func and true to call back add code
  );
  res.status(200).json({ result });
});

app.get('/numbers/subtract/:paramNum1/from/:paramNum2', (req, res) => {
  const result = checkNumbersFromParameters(
    { b: req.params.paramNum2, a: req.params.paramNum1 },
    res,
    false, // calls func and false as its a subtract
  );
  res.status(200).json({ result });
});

// NUMBERS Multiply

function checkNumbersFromBodies(req, res) {
  console.log('test');
  if (!req.body.a || !req.body.b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  const bodyNum1 = parseInt(req.body.a);
  const bodyNum2 = parseInt(req.body.b);

  if (Number.isNaN(bodyNum1) || Number.isNaN(bodyNum2)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    return multiply(bodyNum1, bodyNum2);
  }
}

app.post('/numbers/multiply', (req, res) => {
  const result = checkNumbersFromBodies(req, res);
  res.status(200).json({ result });
});

// NUMBERS Divide

app.post('/numbers/divide', (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  if (req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  }

  if (req.body.a === 0 || !req.body.b === 0) {
    res.status(200).json({ result: 0 });
  }
  if (!req.body.a || !req.body.b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: divide(a, b) });
  }
});

// REMAINDER

app.post('/numbers/remainder', (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  if (req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  if (req.body.a === 0 || !req.body.b === 0) {
    res.status(200).json({ result: 0 });
  }
  if (!req.body.a || !req.body.b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: remainder(a, b) });
  }
});

// BOOLEANS

app.post('/booleans/negate', (req, res) => {
  res.status(200).json({ result: negate(req.body.value) });
});

app.post('/booleans/truthiness', (req, res) => {
  res.status(200).json({ result: truthiness(req.body.value) });
});

app.get('/booleans/is-odd/:number', (req, res) => {
  const number = parseInt(req.params.number);

  if (isNaN(number)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  } else {
    res.status(200).json({ result: isOdd(number) });
  }
});

app.get('/booleans/:string/starts-with/:character', (req, res) => {
  if (req.params.character.length > 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  }
  res.status(200).json({ result: startsWith(req.params.character, req.params.string) });
});

// Arrays

app.post('/arrays/element-at-index/:index', (req, res) => {
  res.status(200).json({ result: getNthElement(req.params.index, req.body.array) });
});

app.post('/arrays/to-string', (req, res) => {
  res.status(200).json({ result: arrayToCSVString(req.body.array) });
});

app.post('/arrays/append', (req, res) => {
  res.status(200).json({ result: addToArray(req.body.value, req.body.array) });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  res.status(200).json({ result: elementsStartingWithAVowel(req.body.array) });
});

app.post('/arrays/remove-element', (req, res) => {
  res.status(200).json({ result: removeNthElement2(req.query.index, req.body.array) });
});
module.exports = app;
