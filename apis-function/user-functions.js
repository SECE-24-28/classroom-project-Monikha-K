const User = require("../models/user");
// Create single user
exports.createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, mobileNumber, password } = req.body;
    const createdUser = await User.create({
      firstName,
      lastName,
      email,
      mobileNumber,
      password,
    });
    return res.status(200).json({
      success: true,
      message: "User created successfully",
      data: createdUser,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      error: e.message,
    });
  }
};
// Insert many users
exports.insertManyUsers = async (req, res) => {
  try {
    const users = req.body.users; // Expecting array of user objects
    if (!Array.isArray(users) || users.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Please provide an array of users",
      });
    }
    const insertedUsers = await User.insertMany(users);
    return res.status(200).json({
      success: true,
      message: `${insertedUsers.length} users inserted successfully`,
      data: insertedUsers,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      error: e.message,
    });
  }
};
// Find all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      count: users.length,
      data: users,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      error: e.message,
    });
  }
};
// Find user by ID
exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data: user,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      error: e.message,
    });
  }
};
// Find users by query (email, firstName, etc.)
exports.findUsers = async (req, res) => {
  try {
    const query = req.body; // Send query as JSON body
    const users = await User.find(query);
    return res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      count: users.length,
      data: users,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      error: e.message,
    });
  }
};
// Update user by ID
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      error: e.message,
    });
  }
};
// Delete one user by ID
exports.deleteOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: deletedUser,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      error: e.message,
    });
  }
};
// Delete many users by query
exports.deleteManyUsers = async (req, res) => {
  try {
    const query = req.body; // Send query as JSON body
    if (Object.keys(query).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Please provide a query to delete users",
      });
    }
    const result = await User.deleteMany(query);
    return res.status(200).json({
      success: true,
      message: `${result.deletedCount} users deleted successfully`,
      deletedCount: result.deletedCount,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      error: e.message,
    });
  }
};