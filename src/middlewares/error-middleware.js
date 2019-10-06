const { isProduction } = require('#config');
const { logger } = require('#utils');
const { ERROR_MESSAGES, ERROR_STATUS, ERROR_CODES } = require('#error');

// eslint-disable-next-line no-unused-vars
function errorMiddleware(err, req, res, next) {
  const productionResponse = {
    status: err.status || ERROR_STATUS.INTERNAL_SERVER_ERROR,
    code: err.code || ERROR_CODES.default,
    message: err.isCustom ? err.message : ERROR_MESSAGES.default
  };

  const developmentResponse = {
    ...productionResponse,
    stack: err.stack,
    message: err.message
  };

  logger.error(JSON.stringify(developmentResponse, null, 2));

  return res
    .status(productionResponse.status)
    .json(isProduction ? productionResponse : developmentResponse);
}

const handleErrorAsync = func => async (req, res, next) => {
  try {
    await func(req, res, next);
  } catch (error) {
    next(error);
  }
};

module.exports = { errorMiddleware, handleErrorAsync };
