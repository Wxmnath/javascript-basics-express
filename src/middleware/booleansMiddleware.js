const isOddParameterMiddleware = (req, res, next) => {
  const radix = 10;
  const number = parseInt(req.params.number, radix);
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(number)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  }

  next();
};

const startsWithMiddleware = (req, res, next) => {
  if (req.params.character.length > 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  }
  next();
};
module.exports = {
  isOddParameterMiddleware,
  startsWithMiddleware,
};
