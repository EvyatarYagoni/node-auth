const express = require("express");
const app = express();
const router = require("./routes");
const cors = require("cors");
const {authMiddleware} = require("./middlewares/auth/authMiddleware");
const healthRouter = require("./routes/health/health");
require("dotenv").config();
const port = process.env.PORT || 3000;

const connectDB = require("./config/db");

app.use(express.json());
app.use(cors());
app.use('/health', healthRouter);
app.use('/api',authMiddleware, router);

connectDB();

app.listen(port, () => {
    console.log(`app is running on port ${port}`)
})
