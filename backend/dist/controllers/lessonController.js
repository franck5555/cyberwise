"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLesson = exports.updateLesson = exports.createLesson = exports.getLessonById = exports.getLessons = void 0;
const Lesson_1 = __importDefault(require("../models/Lesson"));
// Get all lessons
const getLessons = async (req, res) => {
    try {
        const lessons = await Lesson_1.default.find();
        res.status(200).json(lessons);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching lessons', error });
    }
};
exports.getLessons = getLessons;
// Get a single lesson by ID
const getLessonById = async (req, res) => {
    const { id } = req.params;
    try {
        const lesson = await Lesson_1.default.findById(id);
        if (!lesson) {
            return res.status(404).json({ message: 'Lesson not found' });
        }
        res.status(200).json(lesson);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching lesson', error });
    }
};
exports.getLessonById = getLessonById;
// Create a new lesson
const createLesson = async (req, res) => {
    const newLesson = new Lesson_1.default(req.body);
    try {
        const savedLesson = await newLesson.save();
        res.status(201).json(savedLesson);
    }
    catch (error) {
        res.status(400).json({ message: 'Error creating lesson', error });
    }
};
exports.createLesson = createLesson;
// Update a lesson by ID
const updateLesson = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedLesson = await Lesson_1.default.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedLesson) {
            return res.status(404).json({ message: 'Lesson not found' });
        }
        res.status(200).json(updatedLesson);
    }
    catch (error) {
        res.status(400).json({ message: 'Error updating lesson', error });
    }
};
exports.updateLesson = updateLesson;
// Delete a lesson by ID
const deleteLesson = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedLesson = await Lesson_1.default.findByIdAndDelete(id);
        if (!deletedLesson) {
            return res.status(404).json({ message: 'Lesson not found' });
        }
        res.status(200).json({ message: 'Lesson deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting lesson', error });
    }
};
exports.deleteLesson = deleteLesson;
