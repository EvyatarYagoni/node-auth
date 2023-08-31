const express = require('express');
const router = express.Router();
const { authMiddleware} = require('../middlewares/auth/authMiddleware');
const publicRoutes = require("./public");
const protectedRoutes = require("./protected");

router.use('/api', authMiddleware , protectedRoutes)
router.use('/', publicRoutes);

module.exports = router;