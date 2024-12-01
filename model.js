const mongoose = require("mongoose");

// Define the schema for a Person
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // This field is required
  },
  age: {
    type: Number,
    required: true, // This field is required
  },
  favoriteFoods: {
    type: [String], // An array of strings
    default: [], // Set a default empty array if not provided
  },
  email: {
    type: String,
    unique: true, // Ensure email is unique
    required: true, // Email is required
    lowercase: true, // Automatically convert to lowercase
    match: [/.+@.+\..+/, "Please enter a valid email address"], // Basic email format validation
  },
  createdAt: {
    type: Date,
    default: Date.now, // Set the default creation date to the current time
  },
});

// Create the model from the schema
const person = mongoose.model("info", personSchema);

module.exports = person;
