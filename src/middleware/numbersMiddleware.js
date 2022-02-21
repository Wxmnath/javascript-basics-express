const parameterNotValid = (req, res, next) => {
  const radix = 10;
  const a = parseInt(req.params.a, radix);
  const b = parseInt(req.params.b, radix);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  next();
};

const parametersRequired = (req, res, next) => {
  const radix = 10;
  const a = parseInt(req.body.a, radix);
  const b = parseInt(req.body.b, radix);
  if (!req.body.a || !req.body.b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  next();
};

const divideIfMoreThanZero = (req, res, next) => {
  const radix = 10;
  const a = parseInt(req.body.a, radix);
  const b = parseInt(req.body.b, radix);
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
  }
  next();
};
const remainderMiddleware = (req, res, next) => {
  const radix = 10;
  const a = parseInt(req.body.a, radix);
  const b = parseInt(req.body.b, radix);
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
  }
  next();
};

module.exports = {
  parameterNotValid,
  parametersRequired,
  divideIfMoreThanZero,
  remainderMiddleware,
};
