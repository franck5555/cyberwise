"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const quizSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        required: true,
    },
    quizId: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
    level: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced'],
        required: true,
    },
    completedAt: {
        type: Date,
        default: Date.now,
    },
    answers: [
        {
            questionId: {
                type: String,
                required: true,
            },
            selectedAnswer: {
                type: String,
                required: true,
            },
        },
    ],
});
const Quiz = (0, mongoose_1.model)('Quiz', quizSchema);
exports.default = Quiz;
