const express = require('express');
const {
  addToArrayController,
  elementsStartingWithAVowelController,
  elementAtIndexController,
  removeNthElement2Controller,
  toStringController,
} = require('../controllers/arraysController');

const arraysRouter = express.Router();

arraysRouter.post('/element-at-index/:index', elementAtIndexController);
arraysRouter.post('/to-string', toStringController);
arraysRouter.post('/append', addToArrayController);
arraysRouter.post('/starts-with-vowel', elementsStartingWithAVowelController);
arraysRouter.post('/remove-element', removeNthElement2Controller);

module.exports = arraysRouter;
