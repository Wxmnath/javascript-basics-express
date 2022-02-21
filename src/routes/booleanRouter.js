const express = require('express');

const {
  isOddParameterMiddleware,
  startsWithMiddleware,
} = require('../middleware/booleansMiddleware');
const {
  negateController,
  truthinessController,
  issOddController,
  startsWithController,
} = require('../controllers/booleansController');

const booleansRouter = express.Router();

booleansRouter.post('/negate', negateController);
booleansRouter.post('/truthiness', truthinessController);
booleansRouter.get('/is-odd/:number', isOddParameterMiddleware, issOddController);
booleansRouter.get('/:string/starts-with/:character', startsWithMiddleware, startsWithController);

module.exports = booleansRouter;
