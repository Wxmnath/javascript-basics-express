const {
  getNthElement,
  arrayToCSVString,
  addToArray,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('../lib/arrays');

const elementAtIndexController = (req, res) => {
  res.status(200).json({ result: getNthElement(req.params.index, req.body.array) });
};

const toStringController = (req, res) => {
  res.status(200).json({ result: arrayToCSVString(req.body.array) });
};

const addToArrayController = (req, res) => {
  res.status(200).json({ result: addToArray(req.body.value, req.body.array) });
};

const elementsStartingWithAVowelController = (req, res) => {
  res.status(200).json({ result: elementsStartingWithAVowel(req.body.array) });
};

const removeNthElement2Controller = (req, res) => {
  res.status(200).json({ result: removeNthElement2(req.query.index, req.body.array) });
};

module.exports = {
  elementAtIndexController,
  toStringController,
  addToArrayController,
  elementsStartingWithAVowelController,
  removeNthElement2Controller,
};
