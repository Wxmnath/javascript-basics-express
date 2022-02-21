const express = require('express');

const stringsRouter = require('./routes/stringRouter');
const numbersRouter = require('./routes/numberRouter');
const arraysRouter = require('./routes/arrayRouter');
const booleansRouter = require('./routes/booleanRouter');

const app = express();
app.use(express.json());

app.use('/strings', stringsRouter);
app.use('/numbers', numbersRouter);
app.use('/arrays', arraysRouter);
app.use('/booleans', booleansRouter);

module.exports = app;
