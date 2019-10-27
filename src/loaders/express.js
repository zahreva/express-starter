const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const config = require('#config');
const createRouter = require('#routes');
const { notFoundHandler, errorMiddleware } = require('#middlewares');

async function expressLoader(app) {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan('dev'));
  app.use(express.static(`${config.workingDirectory}dist`));

  app.get('/', (req, res) => {
    res.send(`Date: ${new Date()}
    Enviroment: ${config.env}`);
  });

  createRouter(app);

  app.use(errorMiddleware);
  app.use(notFoundHandler);
}

module.exports = { expressLoader };
