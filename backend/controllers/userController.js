const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getUser = (req, res) => {
  res.send("getUser");
};

const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);

  const user = {
    name,
    email,
    password: hashedPassword,
  };
  User.create(user, (err, user) => {
    if (err) return res.json(err.message);
  });
  return res.json("user Created");
};

const login = (req, res) => {
  const { email, password } = req.body;
  console.log(req.cars);
  User.findOne({ email }, (err, user) => {
    if (err) return res.json(err.message);
    if (!user) return res.json("user not found");
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) return res.json("password is incorrect");
    const token = jwt.sign({ user }, process.env.SECRET_KEY, {
      expiresIn: "2h",
    });
    return res.json(token);
  });
};

module.exports = { getUser, registerUser, login };
