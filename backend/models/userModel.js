const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const userScheme = mongoose.Schema({
  name: "string",
  email: "string",
  password: "string",
  cars: [
    {
      type: ObjectId,
      ref: "User",
    },
  ],
});

const User = mongoose.model("User", userScheme);

module.exports = User;
