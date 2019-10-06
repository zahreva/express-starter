const express = require('express');
const checkSchemas = require('./schemas');
const { validatorMiddleware, handleErrorAsync } = require('#middlewares');

const router = new express.Router();

router.post(
  '/',
  checkSchemas('createBot'),
  validatorMiddleware,
  handleErrorAsync(...[require('./post')])
);

router.get('/', handleErrorAsync(...[require('./get')]));

module.exports = router;
