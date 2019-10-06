const { ERROR_CODES, ERROR_STATUS, ERROR_MESSAGES } = require('#error');

function notFoundHandler(req, res) {
  res.status(ERROR_STATUS.NOT_FOUND);

  return res.json({
    status: ERROR_STATUS.NOT_FOUND,
    message: ERROR_MESSAGES.routeNotFound,
    code: ERROR_CODES.default
  });
}

module.exports = { notFoundHandler };
