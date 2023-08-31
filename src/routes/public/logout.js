const express = require('express');
const signOutRouter = express.Router();
const authController = require('../../controllers/authController');

signOutRouter.post('/', authController.logout);

module.exports = signOutRouter;

