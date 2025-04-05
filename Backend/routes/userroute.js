const express = require("express");
const User = require("../models/user");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");

//Register route
userRouter.post("/register", async (req, res) => {
  try {
    const { username, email, password,role,statust } = req.body;
    //Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    //create the new user
    const user = await User.create({
      username,
      email,
      password,
      role,
      statust
    
      
    });
    
    if (user) {
      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Login
// userRouter.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (user && (await user.matchPassword(password))) {
//       res.json({
//         user: {
//           _id: user._id,
//           username: user.username,
//           email: user.email,
//           statust: user.statust,
//           role:user.role,
//           token: generateToken(user._id),
//         },
//       });
//       console.log(user);
//     } else {
//       res.status(401).json({ message: "Invalid email or password" });
//     }
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      // Update last login timestamp
      user.lastLogin = new Date();
      await user.save();

      res.json({
        user: {
          _id: user._id,
          username: user.username,
          email: user.email,
          statust: user.statust,
          role: user.role,
          lastLogin: user.lastLogin, // Include last login in response
          token: generateToken(user._id),
        },
      });
      console.log("User Logged In:", user);
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


//generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};


//get last 5 
// userRouter.get("/latest-users", async (req, res) => {
//     try {
//       const users = await User.find().sort({ createdAt: -1 }).limit(5);
//       res.json(users);
//     } catch (error) {
//       res.status(500).json({ message: "Server Error", error });
//     }
//   });

userRouter.get("/latest-logins", async (req, res) => {
  try {
    const users = await User.find({ lastLogin: { $ne: null } }) // Find users with lastLogin set
      .sort({ lastLogin: -1 }) // Sort by last login (most recent first)
      .limit(5);

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

module.exports = userRouter;