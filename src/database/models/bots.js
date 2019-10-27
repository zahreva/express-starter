const uuid = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
  const Bots = sequelize.define(
    'bots',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: uuid
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      platformId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'platforms',
          key: 'id'
        }
      }
    },
    {}
  );
  Bots.associate = models => {
    Bots.belongsTo(models.platforms, {
      foreignKey: 'platformId',
      as: 'platform'
    });
  };
  return Bots;
};
