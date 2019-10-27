const express = require('express');
const { handleErrorAsync } = require('#middlewares');

const router = new express.Router({ mergeParams: true });

router.get('/', handleErrorAsync(...[require('./get')]));
router.delete('/', handleErrorAsync(...[require('./delete')]));

module.exports = router;
