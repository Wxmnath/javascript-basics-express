const express = require('express');
const { sayHello, uppercase } = require('./lib/strings');

const app = express();

app.get('/strings/hello/:string', function(req, res) {
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:hello', function(req, res) {
  res.json({ result: uppercase(req.params.hello) });
});

module.exports = app;
