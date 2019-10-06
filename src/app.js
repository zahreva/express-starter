/* eslint-disable global-require */
require('module-alias/register');

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const config = require('#config');
const { logger } = require('#utils');
const createRouter = require('./routes');
const { notFoundHandler, errorMiddleware } = require('#middlewares');

const app = express();

async function startServer() {
  process.on('unhandledRejection', (reason, p) => {
    logger.error(p, reason);
  });

  process.on('uncaughtException', error => {
    logger.error(error);
  });

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

  app.listen(config.port, () => {
    logger.info(
      `Server started at port ${config.port} in ${config.env} environment`
    );
  });
}

startServer();
