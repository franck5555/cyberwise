import { Request, Response } from 'express';
import Quiz from '../models/Quiz';

// Get all quizzes
export const getQuizzes = async (req: Request, res: Response) => {
    try {
        const quizzes = await Quiz.find();
        res.status(200).json(quizzes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching quizzes', error });
    }
};

// Get a single quiz by ID
export const getQuizById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const quiz = await Quiz.findById(id);
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }
        res.status(200).json(quiz);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching quiz', error });
    }
};

// Create a new quiz
export const createQuiz = async (req: Request, res: Response) => {
    const newQuiz = new Quiz(req.body);
    try {
        const savedQuiz = await newQuiz.save();
        res.status(201).json(savedQuiz);
    } catch (error) {
        res.status(400).json({ message: 'Error creating quiz', error });
    }
};

// Update a quiz by ID
export const updateQuiz = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const updatedQuiz = await Quiz.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedQuiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }
        res.status(200).json(updatedQuiz);
    } catch (error) {
        res.status(400).json({ message: 'Error updating quiz', error });
    }
};

// Delete a quiz by ID
export const deleteQuiz = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedQuiz = await Quiz.findByIdAndDelete(id);
        if (!deletedQuiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }
        res.status(200).json({ message: 'Quiz deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting quiz', error });
    }
};