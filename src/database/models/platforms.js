module.exports = (sequelize, DataTypes) =>
  sequelize.define('platforms', {
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
  });

/*
Platforms.associate = models => {
  Platforms.hasMany(models.bots, {
    as: 'bots'
  });
};
*/
