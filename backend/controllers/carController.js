const Car = require("../models/carModel");

const getAllCars = (req, res) => {
  //   Car.find({}, (err, cars) => {
  //     if (err) return res.json(err.message);
  //     return res.json(cars);
  //   });

  let cars = Car.find({ addedBy: req.user.user._id })
    .populate("addedBy", "name")
    .exec((err, cars) => {
      if (err) res.json(err.message);
      res.json(cars);
    });
};

const addCar = (req, res) => {
  const { name, model, make, registeration } = req.body;
  const car = {
    name,
    model,
    make,
    registeration,
    addedBy: req.user.user,
  };
  Car.create(car, (err, car) => {
    if (err) return res.json(err.message);
  });
  return res.json("car Created");
};

const deleteCar = (req, res) => {
  const { id } = req.body;
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