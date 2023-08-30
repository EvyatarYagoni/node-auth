const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth/auth'));
router.use('/users', require('./user/user'));

module.exports = router;