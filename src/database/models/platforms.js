module.exports = (sequelize, DataTypes) => {
  const Platforms = sequelize.define(
    'platforms',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
      platformName: {
        type: DataTypes.STRING,
        unique: true
      }
    },
    {}
  );
  Platforms.associate = models => {
    Platforms.hasMany(models.bots, {
      as: 'bots'
    });
  };
  return Platforms;
};
