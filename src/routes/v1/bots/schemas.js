const { body } = require('express-validator');

function checkSchemas(method) {
  switch (method) {
    case 'createBot': {
      return [
        body('id')
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
          .withMessage('name should be string'),
        body('language')
          .exists()
          .withMessage('language should exist')
          .bail()
          .isString()
          .withMessage('language should be string'),
        body('type')
          .exists()
          .withMessage('type should exist')
          .bail()
          .isString()
          .withMessage('type should be string')
      ];
    }
    default:
      return null;
  }
}

module.exports = checkSchemas;
