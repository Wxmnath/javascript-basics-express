const express = require('express');

const {
  helloController,
  upperController,
  lowerController,
  firstCharactersController,
} = require('../controllers/stringController');

const stringsRouter = express.Router();

stringsRouter.get('/hello/:string', helloController);

stringsRouter.get('/upper/:string', upperController);

stringsRouter.get('/lower/:string', lowerController);

stringsRouter.get('/first-characters/:string', firstCharactersController);

module.exports = stringsRouter;
