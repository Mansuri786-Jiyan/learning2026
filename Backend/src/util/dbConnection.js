const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/internship_learning2026");
    console.log("Database Connected ");
  } catch (error) {
    console.log("Database Error ", error.message);
    process.exit(1);
  }
};

module.exports = dbConnection;   