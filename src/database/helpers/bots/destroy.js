const db = require('#database');
const AppError = require('#error');

function destroy(id) {
  return db.bots.destroy({ where: { id } }).catch(err => {
    throw new AppError({
      code: AppError.ERROR_CODES.DB_ERROR,
      message: err.message || AppError.MESSAGES.DEFAULT
    });
  });
}

module.exports = { destroy };
