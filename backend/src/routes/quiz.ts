import express from 'express';
import { getQuizzes, createQuiz, getQuizById, updateQuiz, deleteQuiz } from '../controllers/quizController';

const router = express.Router();

// Get all quizzes
router.get('/', getQuizzes);

// Create a new quiz
router.post('/', createQuiz);

// Get a quiz by ID
router.get('/:id', getQuizById);

// Update a quiz by ID
router.put('/:id', updateQuiz);

// Delete a quiz by ID
router.delete('/:id', deleteQuiz);

export default router;