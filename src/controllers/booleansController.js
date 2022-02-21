const { negate, truthiness, isOdd, startsWith } = require('../lib/booleans');

const negateController = (req, res) => {
  res.status(200).json({ result: negate(req.body.value) });
};

const truthinessController = (req, res) => {
  res.status(200).json({ result: truthiness(req.body.value) });
};

const issOddController = (req, res) => {
  const radix = 10;
  const number = parseInt(req.params.number, radix);
  res.status(200).json({ result: isOdd(number) });
};

const startsWithController = (req, res) => {
  res.status(200).json({ result: startsWith(req.params.character, req.params.string) });
};

module.exports = {
  negateController,
  truthinessController,
  issOddController,
  startsWithController,
};
