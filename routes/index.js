var express = require('express');
var router = express.Router();

router.use('/recipes', require('./recipes'));
router.use('/groceries', require('./groceries'));

module.exports = router;
