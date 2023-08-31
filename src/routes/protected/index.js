const express = require('express');
const router = express.Router();

router.use('/users', require('../user/user'));

module.exports = router;