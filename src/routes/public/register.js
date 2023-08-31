const express = require('express');
const registerRouter = express.Router();
const authController = require('../../controllers/authController');

registerRouter.post('/', authController.signup);

module.exports = registerRouter;

