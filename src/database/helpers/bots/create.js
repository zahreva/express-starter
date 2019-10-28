const uuid = require('uuid/v4');

const { Bots } = require('#database');
const AppError = require('#error');

function create({ name, platformId }) {
  return Bots.create({ id: uuid(), name, platformId }).catch(err => {
    throw new AppError({
      code: AppError.ERROR_CODES.DB_ERROR,
      message: err.message || AppError.MESSAGES.DEFAULT
    });
  });
}

module.exports = { create };
