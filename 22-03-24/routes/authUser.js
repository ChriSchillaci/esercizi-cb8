const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const route = express.Router();

const User = require("../models/user.js");

route.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      password: hashedPassword,
    });

    const registeredUser = await user.save();
    res.status(201).json({ message: "User registered", registeredUser });
  } catch (error) {
    res.status(500).json({ message: "Registration failed" });
  }
});

route.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (user == null || !(await bcrypt.compare(password, user.password))) {
      res.status(401);
      throw new Error("Invalid credentials. Please try again.");
    }

    const token = jwt.sign({ user: user.username }, process.env.SECRET_KEY);

    res.json({ token });
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = route;
