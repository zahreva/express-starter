const express = require('express');
const { handleErrorAsync } = require('#middlewares');

const router = new express.Router();

router.get('/', handleErrorAsync(...[require('./get')]));

module.exports = router;
