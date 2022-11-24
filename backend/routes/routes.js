const express = require("express");

const { registerUser, login } = require("../controllers/userController");

const { auth } = require("../middlewares/authMiddleware");
const {
  getAllCars,
  addCar,
  deleteCar,
  editCar,
} = require("../controllers/carController");
const router = express.Router();

router.get("/", auth, getAllCars);
router.post("/addcar", auth, addCar);
router.post("/deletecar", auth, deleteCar);
router.post("/editcar", auth, editCar);

router.post("/register", registerUser);
router.post("/login", login);

module.exports = router;
