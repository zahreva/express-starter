const { logger } = require('#utils');

const { expressLoader } = require('./express');
const { sequelizeLoader } = require('./sequelize');

async function loaders({ expressApp }) {
  await sequelizeLoader();
  await expressLoader(expressApp);
  logger.info('Express Intialized');
}

module.exports = { loaders };
