"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    photoUrl: {
        type: String,
        default: '',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    lastLogin: {
        type: Date,
        default: null,
    },
    emailVerified: {
        type: Boolean,
        default: false,
    },
    learningLevel: {
        type: String,
        enum: ['beginner', 'intermediate', 'advanced'],
        default: 'beginner',
    },
    xp: {
        type: Number,
        default: 0,
    },
    securityScore: {
        type: Number,
        default: 0,
    },
    streakCount: {
        type: Number,
        default: 0,
    },
});
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
