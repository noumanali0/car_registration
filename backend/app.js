const router = require("./routes/routes");
const express = require("express");
const bodyParser = require("body-parser");
const dbConnection = require("./models/connection");
require("dotenv").config();

dbConnection();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
