"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const sendVerificationEmail = async (_user) => {
    return Promise.resolve();
};
const authController = {
    signUp: async (req, res) => {
        const { name, email, password } = req.body;
        try {
            const hashedPassword = await bcrypt_1.default.hash(password, 10);
            const newUser = new User_1.default({
                name,
                email,
                password: hashedPassword,
                emailVerified: false,
            });
            await newUser.save();
            await sendVerificationEmail(newUser);
            res.status(201).json({ message: 'User created successfully. Please verify your email.' });
        }
        catch (error) {
            res.status(500).json({ message: 'Error creating user', error });
        }
    },
    login: async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await User_1.default.findOne({ email });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            const isMatch = await bcrypt_1.default.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
            const token = jsonwebtoken_1.default.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
            res.status(200).json({ token, user });
        }
        catch (error) {
            res.status(500).json({ message: 'Error logging in', error });
        }
    },
    verifyEmail: async (req, res) => {
        const { token } = req.params;
        try {
            const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || 'secret');
            const user = await User_1.default.findById(decoded.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            user.emailVerified = true;
            await user.save();
            res.status(200).json({ message: 'Email verified successfully' });
        }
        catch (error) {
            res.status(500).json({ message: 'Error verifying email', error });
        }
    },
    forgotPassword: async (req, res) => {
        const { email } = req.body;
        try {
            const user = await User_1.default.findOne({ email });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            // Logic to send password reset email goes here
            res.status(200).json({ message: 'Password reset email sent' });
        }
        catch (error) {
            res.status(500).json({ message: 'Error sending password reset email', error });
        }
    },
    changePassword: async (req, res) => {
        const { userId, oldPassword, newPassword } = req.body;
        try {
            const user = await User_1.default.findById(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            const isMatch = await bcrypt_1.default.compare(oldPassword, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: 'Old password is incorrect' });
            }
            user.password = await bcrypt_1.default.hash(newPassword, 10);
            await user.save();
            res.status(200).json({ message: 'Password changed successfully' });
        }
        catch (error) {
            res.status(500).json({ message: 'Error changing password', error });
        }
    },
};
exports.default = authController;
