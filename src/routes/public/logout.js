const express = require('express');
const logoutRouter = express.Router();
const authController = require('../../controllers/authController');

logoutRouter.post('/', authController.logout);

module.exports = logoutRouter;

