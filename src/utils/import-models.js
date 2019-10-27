/* eslint-disable import/no-dynamic-require */
const path = require('path');
const glob = require('glob');

function importModels(sequelizeConnection, sequelize) {
  const models = {};

  glob
    .sync('*.js', { cwd: path.join(__dirname, '../db/models') })
    .forEach(modelName => {
      const model = require(`../database/models/${modelName}`);
      models[`${modelName}`] = model(sequelizeConnection, sequelize);
    });

  return models;
}

module.exports = { importModels };
