const { db } = require('#config');

module.exports = {
  development: {
    ...db
  }
};
