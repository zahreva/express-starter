const { syncModels } = require('#database/relations');
const { logger } = require('#utils');

const {
  db: { dialect }
} = require('#config');

async function sequelizeLoader() {
  try {
    await syncModels();
    logger.info(`Success connected to ${dialect}`);
  } catch (e) {
    logger.error('Error connect to MySQL');
    logger.error(e);
  }
}

module.exports = { sequelizeLoader };
