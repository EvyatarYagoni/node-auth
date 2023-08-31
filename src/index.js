const express = require("express");
const app = express();
const cors = require("cors");
const allRoutes = require("./routes/index");
require("dotenv").config();
const port = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');

const connectDB = require("./config/db");
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(allRoutes);

app.listen(port, () => {
    console.log(`app is running on port ${port}`)
})
