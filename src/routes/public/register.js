const express = require('express');
const registerRouter = express.Router();

registerRouter.get('/', (req, res) => {
    res.send("Hello register");
});

module.exports = registerRouter;

