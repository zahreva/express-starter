const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('bots', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: uuid
      },
      username: {
        type: DataTypes.STRING
      },
      age: {
        type: DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('bots');
  }
};
