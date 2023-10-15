const express = require("express");
const User = require("../models/User");
const userRoute = express.Router();
const functions = require("../functions");

userRoute.post("/signup", async (req, res) => {
  let body = {
    ...req.body,
    password: await (async () => {
      return await functions.bcrypt(req.body.password);
    })(),
  };
  const account = new User(body);
  try {
    await account.save();
    res.status(201).send("User created successfully!");
  } catch (err) {
    res.status(500).send(err);
  }
});

userRoute.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user exists in the database based on the provided username
    const user = await User.findOne({ username: username });

    if (!user) {
      // User not found
      res.status(401).json({
        status: false,
        message: "Invalid Username and Password",
      });
      return;
    }

    const isValid = await functions.validate(password, user.password);

    console.log({isValid});
    
    if (isValid) {
        res.status(200).json({
            status: true,
            username: user.username,
            message: "User logged in successfully",
          });
    } else {
        res.status(401).json({
            status: false,
            message: "Invalid Username and Password",
        });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = userRoute;
