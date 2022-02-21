const { add, subtract, multiply, divide, remainder } = require('../lib/numbers');

const addController = (req, res) => {
  const radix = 10;
  const a = parseInt(req.params.a, radix);
  const b = parseInt(req.params.b, radix);
  res.status(200).json({ result: add(a, b) });
};

const subtractController = (req, res) => {
  const radix = 10;
  const a = parseInt(req.params.a, radix);
  const b = parseInt(req.params.b, radix);
  res.status(200).json({ result: subtract(b, a) });
};

const multiplyController = (req, res) => {
  const radix = 10;
  const a = parseInt(req.body.a, radix);
  const b = parseInt(req.body.b, radix);
  res.status(200).json({ result: multiply(a, b) });
};

const divideController = (req, res) => {
  const radix = 10;
  const a = parseInt(req.body.a, radix);
  const b = parseInt(req.body.b, radix);
  res.status(200).json({ result: divide(a, b) });
};

const remainderController = (req, res) => {
  const radix = 10;
  const a = parseInt(req.body.a, radix);
  const b = parseInt(req.body.b, radix);
  res.status(200).json({ result: remainder(a, b) });
};

module.exports = {
  addController,
  subtractController,
  multiplyController,
  divideController,
  remainderController,
};
