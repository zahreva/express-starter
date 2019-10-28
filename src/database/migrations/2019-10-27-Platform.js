module.exports = {
  up: (queryInterface, DataTypes) =>
    queryInterface.createTable('platforms', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      type: {
        type: DataTypes.STRING,
        unique: true
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
  down: async queryInterface => {
    await queryInterface.dropTable('bots');
    return queryInterface.dropTable('platforms');
  }
};
