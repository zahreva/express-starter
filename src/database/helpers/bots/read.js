const db = require('#database');
const AppError = require('#error');

function getAll() {
  return db.bots
    .findAll({
      include: [
        {
          model: db.platforms,
          as: 'platform'
        }
      ]
    })
    .catch(err => {
      throw new AppError({
        code: AppError.ERROR_CODES.DB_ERROR,
        message: err.message || AppError.MESSAGES.DEFAULT
      });
    });
}

function getOne(id) {
  return db.bots
    .findOne({
      where: { id },
      include: [
        {
          model: db.platforms,
          as: 'platform'
        }
      ]
    })
    .catch(err => {
      throw new AppError({
        code: AppError.ERROR_CODES.DB_ERROR,
        message: err.message || AppError.MESSAGES.DEFAULT
      });
    });
}

module.exports = { getAll, getOne };
