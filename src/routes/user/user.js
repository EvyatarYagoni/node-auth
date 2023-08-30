const express = require('express');
const userRouter = express.Router();


userRouter.get('/', async (req, res) => {
    res.send({ message: "Hello User" }).status(200);
});

module.exports = userRouter;