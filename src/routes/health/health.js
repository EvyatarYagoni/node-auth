const express = require('express');
const healthRouter = express.Router();

healthRouter.get('/', (req, res) => {
    res.send('ok').status(200);
});

module.exports = healthRouter;