const express = require('express');
const { add, subtract, multiply, divide } = require('./lib/numbers');
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

/* app.get('/strings/first-character/:string', function(req, res) {
  res.status(200).json({ result: firstCharacter(req.params.string.charAt(0)) });
}); */

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

// NUMBERS

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(a, b) });
  }
});

app.get('/numbers/subtract/:c/from/:d', (req, res) => {
  const c = parseInt(req.params.c);
  const d = parseInt(req.params.d);

  if (Number.isNaN(c) || Number.isNaN(d)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: subtract(d, c) });
  }
});

// eslint-disable-next-line no-shadow
app.post('/numbers/multiply', (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  if (!req.body.a || !req.body.b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: multiply(a, b) });
  }
});

// sequence of the if staements are improtant for all these to pass.
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

module.exports = app;
// Comment
