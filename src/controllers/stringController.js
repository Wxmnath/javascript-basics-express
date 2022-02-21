const { sayHello, uppercase, lowercase, firstCharacters } = require('../lib/strings');

const helloController = (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
};

const upperController = (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
};

const lowerController = (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
};

const firstCharactersController = (req, res) => {
  const { string } = req.params;
  const length = req.query.length || 1;
  res.status(200).json({ result: firstCharacters(string, Number(length)) });
};

module.exports = {
  helloController,
  upperController,
  lowerController,
  firstCharactersController,
};
