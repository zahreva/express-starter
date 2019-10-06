const { ERROR_CODES } = require('./codes');
const { ERROR_MESSAGES } = require('./messages');
const { ERROR_STATUS } = require('./status');

class AppError extends Error {
  constructor(opts) {
    super(typeof opts === 'string' ? opts : opts.message);

    let data;
    let stack;
    let target;
    let code;
    let status;
    let message;

    if (typeof opts === 'string') {
      message = opts;
    } else if (typeof opts === 'object') {
      ({
        data,
        stack,
        target,
        status = ERROR_STATUS.INTERNAL_SERVER_ERROR,
        code = ERROR_CODES.DEFAULT,
        message = ERROR_MESSAGES.SOMETHING_WENT_WRONG
      } = opts);
    }

    this.code = code;
    this.isCustom = true;
    this.status = status;
    this.target = target;
    this.message = message;
    this.data = JSON.stringify(data);

    if (stack) {
      this.stack = stack;
      this.stackStr = stack;
    } else {
      Error.captureStackTrace(this);
      this.stackStr = this.stack;
    }
  }
}

// eslint-disable-next-line no-multi-assign
const errorModule = (module.exports = AppError);
errorModule.ERROR_CODES = ERROR_CODES;
errorModule.ERROR_MESSAGES = ERROR_MESSAGES;
errorModule.ERROR_STATUS = ERROR_STATUS;
