const Car = require("../models/carModel");

const getAllCars = (req, res) => {
  Car.find({}, (err, cars) => {
    if (err) return res.json(err.message);
    return res.json(cars);
  });
};

const addCar = (req, res) => {
  const { name, model, make, registeration, category } = req.body;
  const car = {
    name,
    model,
    make,
    registeration,
    category,
  };
  Car.create(car, (err, car) => {
    if (err) return res.json(err.message);
  });
  return res.json("car Created");
};

const deleteCar = (req, res) => {
  const { id } = req.body;
  console.log(id);
  Car.findByIdAndDelete(id, (err, car) => {
    if (err) return res.json(err.message);
    return res.json("car deleted");
  });
};

const editCar = (req, res) => {
  const { id } = req.body;
  const { name, model, make, registeration } = req.body;
  const car = {
    name,
    model,
    make,
    registeration,
  };
  Car.findByIdAndUpdate(id, car, (err, car) => {
    if (err) return res.json(err.message);
    return res.json("car updated");
  });
};

module.exports = { getAllCars, addCar, editCar, deleteCar };
