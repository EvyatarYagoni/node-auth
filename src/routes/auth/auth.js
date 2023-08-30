const express = require('express');
const authRouter = express.Router();

authRouter.get('/', (req, res) => {
    res.send("Hello Auth");
});

module.exports = authRouter;