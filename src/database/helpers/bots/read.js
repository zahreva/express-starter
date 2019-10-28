const { Bots, Platforms } = require('#database');
const AppError = require('#error');

function getAll() {
  return Bots.findAll({
    include: [
      {
        model: Platforms,
        as: 'platform'
      }
    ]
  }).catch(err => {
    throw new AppError({
      code: AppError.ERROR_CODES.DB_ERROR,
      message: err.message || AppError.MESSAGES.DEFAULT
    });
  });
}

function getOne(id) {
  return Bots.findOne({
    where: { id },
    include: [
      {
        model: Platforms,
        as: 'platform'
      }
    ]
  }).catch(err => {
    throw new AppError({
      code: AppError.ERROR_CODES.DB_ERROR,
      message: err.message || AppError.MESSAGES.DEFAULT
    });
  });
}

module.exports = { getAll, getOne };
