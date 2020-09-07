const router = require('express').Router();
const user = require('./user');
const budget = require('./budget');

router.use('/user', user);
router.use('/budget', budget);

module.exports = router;
