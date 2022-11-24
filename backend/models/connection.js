const mongoose = require("mongoose");
const dbConnection = () => {
  mongoose
    .connect("mongodb://localhost:27017/carRegistration")
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log("Error connecting to database");
    });
};

module.exports = dbConnection;
