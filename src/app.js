require('module-alias/register');

const express = require('express');

const config = require('#config');
const { logger } = require('#utils');
const { loaders } = require('./loaders');

const app = express();

async function startServer() {
  process.on('unhandledRejection', (reason, p) => {
    logger.error(p, reason);
  });

  process.on('uncaughtException', error => {
    logger.error(error);
  });

  await loaders({ expressApp: app });

  app.listen(config.port, () => {
    logger.info(
      `Server started at port ${config.port} in ${config.env} environment`
    );
  });
}

startServer();
