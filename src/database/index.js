const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const {
  db: { database, username, password, dialect, host }
} = require('#config');

const basename = path.basename(__filename);
const modelsPath = path.join(__dirname, './models');
const db = {};

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect
});

fs.readdirSync(modelsPath)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach(file => {
    const model = sequelize.import(path.join(modelsPath, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
