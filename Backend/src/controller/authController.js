const User = require("../model/userModel.js");
const bcrypt = require("bcryptjs");
const sendMail = require("../util/mailer");

// Register User
exports.register = async (req, res) => {
  try {

    const { firstname, lastname, email, password } = req.body;
    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }
    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // create user
    const newUser = new User({
      firstname,
      lastname,
      email,
      password: hashedPassword
    });

    await sendMail(
    email,
    "Welcome to Moneytrails",
    `Hello ${firstname}, your account has been created successfully`
  );


    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
      data: newUser
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};


// Login User
exports.login = async (req, res) => {
  try {

    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }
    // compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid password"
      });
    }

    res.status(200).json({
      message: "Login successful",
      user
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};