const { body } = require('express-validator');

function checkSchemas(method) {
  switch (method) {
    case 'createBot': {
      return [
        body('platformId')
          .exists()
          .withMessage('id should exist')
          .bail()
          .isInt()
          .withMessage('id should be integer'),
        body('name')
          .exists()
          .withMessage('name should exist')
          .bail()
          .isString()
          .withMessage('name should be string')
      ];
    }
    default:
      return null;
  }
}

module.exports = checkSchemas;
