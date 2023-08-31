const express = require('express');
const publicRouter = express.Router();


publicRouter.use('/login', require('./signIn'));
publicRouter.use('/register', require('./register'));
publicRouter.use('/health', require('./health'));

module.exports = publicRouter;