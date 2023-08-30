const express = require("express");
const app = express();
const router = require("./routes");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use('/api', router);

app.listen(port, () => {
    console.log(`app is running on port ${port}`)
})
