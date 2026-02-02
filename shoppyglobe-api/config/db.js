const mongoose = require("mongoose");

// Function to connect to MongoDB Atlas
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error);
    process.exit(1); // Stop server if DB fails
  }
};

module.exports = connectDB;