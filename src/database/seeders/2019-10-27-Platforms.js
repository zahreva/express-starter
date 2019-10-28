const sqlDate = () =>
  new Date()
    .toJSON()
    .slice(0, 19)
    .replace('T', ' ');

module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert(
      'platforms',
      [
        {
          platformName: 'Viber',
          createdAt: sqlDate(),
          updatedAt: sqlDate()
        },
        {
          platformName: 'Facebook',
          createdAt: sqlDate(),
          updatedAt: sqlDate()
        },
        {
          platformName: 'Telegram',
          createdAt: sqlDate(),
          updatedAt: sqlDate()
        }
      ],
      {}
    ),

  down: queryInterface => queryInterface.bulkDelete('platforms', null, {})
};
