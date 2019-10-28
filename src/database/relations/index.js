const db = require('../index');

const { Bots, Platforms } = db;

async function syncModels() {
  //
  Bots.belongsTo(Platforms, {
    foreignKey: 'platformId',
    as: 'platform'
  });

  Platforms.hasMany(Bots, {
    as: 'bots',
    onDelete: 'CASCADE'
  });
  //
  await db.sequelize.authenticate();
  await db.sequelize.sync({ force: false });
}

module.exports = { syncModels };
