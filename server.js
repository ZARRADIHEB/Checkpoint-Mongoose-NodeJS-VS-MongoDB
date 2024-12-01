//?Import mongoose module
const mongoose = require("mongoose");
//?Import dotenv module
const dotenv = require("dotenv");
//?Import person module
const Person = require("./model");

//? Load environment variables
dotenv.config();

//?Get the MongoDB URI from the .env file
const mongoURI = process.env.mongo_URI;

//? Connect to the MongoDB database
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB successfully 😍");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
  }
};

// Call the function to connect
connectToMongoDB();

// const newPerson = async () => {
//   try {
//     const person = new Person({
//       name: "Iheb",
//       age: 55,
//       favoriteFoods: [],
//       email: "zarradiheb17@gmail.com",
//     });
//     const savedPerson = await person.save();
//     console.log("Person Created Successfully: ", savedPerson);
//   } catch (error) {
//     console.log("Error Creating Person: ", error.message);
//   } finally {
//     mongoose.connection.close();
//   }
// };

// newPerson();

// ? Data to create many records
// const peopleData = [
//   {
//     name: "Alice",
//     age: 30,
//     favoriteFoods: ["Pizza", "Pasta"],
//     email: "alice@example.com",
//   },
//   {
//     name: "Bob",
//     age: 25,
//     favoriteFoods: ["Burger", "Fries"],
//     email: "bob@example.com",
//   },
//   {
//     name: "Charlie",
//     age: 35,
//     favoriteFoods: ["Steak", "Salad"],
//     email: "charlie@example.com",
//   },
// ];

//?Create many records at once
// const createManyPeople = async () => {
//   try {
//     const createdPeople = await Person.create(peopleData);
//     console.log("People created:", createdPeople);
//   } catch (error) {
//     console.error("Error creating people:", error.message);
//   } finally {
//     mongoose.connection.close(); // Close the connection after the operation
//   }
// };

//?Call the function
// createManyPeople();

//? Find People
// const findPeople = async (name) => {
//In case everything goes perfect
// try {
//   const result = await Person.find({ name: name });
//   if (result) {
//     console.log("Found person:", result);
//   } else {
//     console.log("No person found with that favorite food.");
//   }
// In case an error occured
// } catch (error) {
//   console.error("Error finding people:", error.message);
// Close the connection after the operation
//   } finally {
//     mongoose.connection.close();
//   }
// };

//?Call the function
// findPeople("Iheb");

//? Find One Person
// const findPerson = async (age) => {
//   try {
//     const result = await Person.findOne({ age: age });
//     if (result) {
//       console.log(`This document match the condition ${result}`);
//     } else {
//       console.log("There is no document match the condition");
//     }
//   } catch (err) {
//     console.log(`An error occured during the finding operaton`, err.message);
//   } finally {
//     mongoose.connection.close();
//   }
// };

// findPerson(25);

//? Find By Id
// const findById = async (id) => {
//   try {
//     const result = await Person.findById(id);
//     if (result) {
//       console.log(`This document match the condition ${result}`);
//     } else {
//       console.log("There is no document match the condition");
//     }
//   } catch (err) {
//     console.log(`An error occured during the finding operaton`, err.message);
//   } finally {
//     mongoose.connection.close();
//   }
// };

// findById("674cb1f2c53be47c7ae70398");

//? find by id and add to the array
// const findAndAdd = async (id, item) => {
//   try {
//     const target = await Person.findById(id);
//     if (!target) {
//       console.log("User not Found");
//       return;
//     }
//     target.favoriteFoods.push(item);
//     await target.save();
//     console.log(`Successfully add ${item} to The user ${id} `);
//   } catch (err) {
//     console.log("An error has occured while updating infos", err.message);
//   } finally {
//     mongoose.connection.close();
//   }
// };

// findAndAdd("674cb1f2c53be47c7ae7039a", "burritos");

//? find one and update
// const findOneAndUpdate = async (name) => {
//   try {
//     const result = await Person.findOneAndUpdate(
//       { name: name },
//       { age: 20 },
//       { new: true }
//     );
//     if (!findOneAndUpdate) {
//       console.log("User Not Found");
//       return;
//     }
//     await result.save();
//     console.log(`The user with the name ${name} successfully updated`);
//   } catch (err) {
//     console.log("An error occured while updating", err.message);
//   } finally {
//     mongoose.connection.close();
//   }
// };

// findOneAndUpdate("Charlie");

//? find by id and remove
// const findByIdAndDelete = async (id) => {
//   try {
// Check if the ID is valid
// if (!mongoose.Types.ObjectId.isValid(id)) {
//   console.log("Invalid ID format");
//   return;
// }

// Attempt to find and remove the document
//     const result = await Person.findByIdAndDelete(id);
//     if (!result) {
//       console.log("No user found with the given ID");
//       return;
//     }

//     console.log(`User with ID ${id} has been successfully removed:`, result);
//   } catch (err) {
//     console.log("An error occurred during the operation:", err.message);
//   } finally {
//     mongoose.connection.close();
//   }
// };

// findByIdAndDelete("674cb5e8271e63d1013d6f1d");

// Delete many documents
// const deletePeopleNamedMary = async () => {
//   try {
//     const result = await Person.deleteMany({ name: "Mary" });
//     console.log("Delete operation result:", result);
//   } catch (err) {
//     console.error("An error occurred while deleting documents:", err.message);
//   } finally {
//     mongoose.connection.close(); // Always close the connection
//   }
// };

// deletePeopleNamedMary();

//? Chain Search Query Helpers to Narrow Search Results
// const findPeopleWhoLikeBurritos = async () => {
//   try {
//     const data = await Person.find({ favoriteFoods: "burritos" }) // Find people who like burritos
//       .sort({ name: 1 }) // Sort by name in ascending order
//       .limit(2) // Limit results to 2 documents
//       .select("-age"); // Exclude the age field

//     console.log("Found people:", data);
//   } catch (err) {
//     console.error("Error occurred:", err.message);
//   } finally {
//     mongoose.connection.close(); // Close the connection after the operation
//   }
// };

// // Run the function
// findPeopleWhoLikeBurritos();
