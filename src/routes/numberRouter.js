const express = require('express');

const {
  parameterNotValid,
  parametersRequired,
  divideIfMoreThanZero,
  remainderMiddleware,
} = require('../middleware/numbersMiddleware');

const {
  addController,
  subtractController,
  multiplyController,
  divideController,
  remainderController,
} = require('../controllers/numberController');

const numbersRouter = express.Router();

numbersRouter.get('/add/:a/and/:b', parameterNotValid, addController);

numbersRouter.get('/subtract/:a/from/:b', parameterNotValid, subtractController);

numbersRouter.post('/multiply', parametersRequired, multiplyController);

numbersRouter.post('/divide', divideIfMoreThanZero, divideController);

numbersRouter.post('/remainder', remainderMiddleware, remainderController);

module.exports = numbersRouter;
