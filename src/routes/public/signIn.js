const express = require('express');
const signInRouter = express.Router();
const authController = require('../../controllers/authController');

signInRouter.post('/', authController.login);

module.exports = signInRouter;

