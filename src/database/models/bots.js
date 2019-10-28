const uuid = require('uuid/v4');

module.exports = (sequelize, DataTypes) =>
  sequelize.define('bots', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: uuid
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    platformId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'platforms',
        key: 'id'
      }
    }
  });
