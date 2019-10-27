const db = require('#database');
const { logger } = require('#utils');

const {
  db: { dialect }
} = require('#config');

async function sequelizeLoader() {
  try {
    await db.sequelize.authenticate();
    await db.sequelize.sync({ force: false });
    logger.info(`Success connected to ${dialect}`);
  } catch (e) {
    logger.error('Error connect to MySQL');
    logger.error(e);
  }
}

module.exports = { sequelizeLoader };
