const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, DataTypes) =>
    queryInterface.createTable('bots', {
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
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }),
  down: queryInterface => queryInterface.dropTable('bots')
};
