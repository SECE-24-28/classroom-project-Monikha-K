const express = require("express");
const { 
  createUser, 
  insertManyUsers, 
  getAllUsers, 
  getUserById, 
  findUsers, 
  updateUser, 
  deleteOneUser, 
  deleteManyUsers 
} = require("../apis-function/user-functions");

const router = express.Router();

// Create single user
router.post("/userSignup", createUser);

// Insert many users
router.post("/insertMany", insertManyUsers);

// Get all users
router.get("/users", getAllUsers);

// Get user by ID
router.get("/users/:id", getUserById);

// Find users by query
router.post("/findUsers", findUsers);

// Update user by ID
router.put("/users/:id", updateUser);

// Delete one user by ID
router.delete("/users/:id", deleteOneUser);

// Delete many users by query
router.post("/deleteMany", deleteManyUsers);

module.exports = router;