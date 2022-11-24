const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const carSchema = mongoose.Schema({
  name: "string",
  model: "string",
  make: "string",
  registeration: Number,
  category: "string",
  addedBy: {
    type: ObjectId,
    ref: "User",
  },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
