const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config.env"});
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());