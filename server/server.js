const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config.env"});
const port = process.env.PORT || 5000;
const dbo = require("./db/conn");

const app = express();

// Dependencies for the app.
app.use(cors());
app.use(express.json());
app.use(require("./routes/posts"));

app.listen(port, () => {
    // Connect to MongoDB using the .env file configuration.
    dbo.connectToServer(function (err) {
      if (err) console.error(err);
  
    });
    console.log(`Server is running on port: ${port}`);
  });