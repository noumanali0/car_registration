const router = require("./routes/routes");
const express = require("express");
const bodyParser = require("body-parser");
const dbConnection = require("./models/connection");
require("dotenv").config();

dbConnection();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
