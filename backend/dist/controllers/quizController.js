"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteQuiz = exports.updateQuiz = exports.createQuiz = exports.getQuizById = exports.getQuizzes = void 0;
const Quiz_1 = __importDefault(require("../models/Quiz"));
// Get all quizzes
const getQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz_1.default.find();
        res.status(200).json(quizzes);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching quizzes', error });
    }
};
exports.getQuizzes = getQuizzes;
// Get a single quiz by ID
const getQuizById = async (req, res) => {
    const { id } = req.params;
    try {
        const quiz = await Quiz_1.default.findById(id);
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }
        res.status(200).json(quiz);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching quiz', error });
    }
};
exports.getQuizById = getQuizById;
// Create a new quiz
const createQuiz = async (req, res) => {
    const newQuiz = new Quiz_1.default(req.body);
    try {
        const savedQuiz = await newQuiz.save();
        res.status(201).json(savedQuiz);
    }
    catch (error) {
        res.status(400).json({ message: 'Error creating quiz', error });
    }
};
exports.createQuiz = createQuiz;
// Update a quiz by ID
const updateQuiz = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedQuiz = await Quiz_1.default.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedQuiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }
        res.status(200).json(updatedQuiz);
    }
    catch (error) {
        res.status(400).json({ message: 'Error updating quiz', error });
    }
};
exports.updateQuiz = updateQuiz;
// Delete a quiz by ID
const deleteQuiz = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedQuiz = await Quiz_1.default.findByIdAndDelete(id);
        if (!deletedQuiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }
        res.status(200).json({ message: 'Quiz deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting quiz', error });
    }
};
exports.deleteQuiz = deleteQuiz;
