const { validationResult } = require('express-validator');
const AppError = require('#error');

// eslint-disable-next-line no-unused-vars
function validatorMiddleware(req, res, next) {
  let errors;
  try {
    errors = validationResult(req);
  } catch (err) {
    return next();
  }

  if (!errors.isEmpty()) {
    throw new AppError({
      status: AppError.ERROR_STATUS.BAD_REQUEST,
      message: errors.array({ onlyFirstError: true })
    });
  }
  return next();
}

module.exports = { validatorMiddleware };
