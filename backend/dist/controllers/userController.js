"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const User_1 = __importDefault(require("../models/User"));
// Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User_1.default.find();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error });
    }
};
exports.getAllUsers = getAllUsers;
// Get a user by ID
const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User_1.default.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving user', error });
    }
};
exports.getUserById = getUserById;
// Create a new user
const createUser = async (req, res) => {
    const newUser = new User_1.default(req.body);
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }
    catch (error) {
        res.status(400).json({ message: 'Error creating user', error });
    }
};
exports.createUser = createUser;
// Update a user by ID
const updateUser = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedUser = await User_1.default.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
    }
    catch (error) {
        res.status(400).json({ message: 'Error updating user', error });
    }
};
exports.updateUser = updateUser;
// Delete a user by ID
const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await User_1.default.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
};
exports.deleteUser = deleteUser;
