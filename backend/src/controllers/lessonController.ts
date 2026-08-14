import { Request, Response } from 'express';
import Lesson from '../models/Lesson';

// Get all lessons
export const getLessons = async (req: Request, res: Response) => {
    try {
        const lessons = await Lesson.find();
        res.status(200).json(lessons);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching lessons', error });
    }
};

// Get a single lesson by ID
export const getLessonById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const lesson = await Lesson.findById(id);
        if (!lesson) {
            return res.status(404).json({ message: 'Lesson not found' });
        }
        res.status(200).json(lesson);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching lesson', error });
    }
};

// Create a new lesson
export const createLesson = async (req: Request, res: Response) => {
    const newLesson = new Lesson(req.body);
    try {
        const savedLesson = await newLesson.save();
        res.status(201).json(savedLesson);
    } catch (error) {
        res.status(400).json({ message: 'Error creating lesson', error });
    }
};

// Update a lesson by ID
export const updateLesson = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const updatedLesson = await Lesson.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedLesson) {
            return res.status(404).json({ message: 'Lesson not found' });
        }
        res.status(200).json(updatedLesson);
    } catch (error) {
        res.status(400).json({ message: 'Error updating lesson', error });
    }
};

// Delete a lesson by ID
export const deleteLesson = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedLesson = await Lesson.findByIdAndDelete(id);
        if (!deletedLesson) {
            return res.status(404).json({ message: 'Lesson not found' });
        }
        res.status(200).json({ message: 'Lesson deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting lesson', error });
    }
};