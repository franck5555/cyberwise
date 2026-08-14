import { Router } from 'express';
import { getLessons, getLessonById, createLesson, updateLesson, deleteLesson } from '../controllers/lessonController';

const router = Router();

// Route to get all lessons
router.get('/', getLessons);

// Route to get a specific lesson by ID
router.get('/:id', getLessonById);

// Route to create a new lesson
router.post('/', createLesson);

// Route to update an existing lesson
router.put('/:id', updateLesson);

// Route to delete a lesson
router.delete('/:id', deleteLesson);

export default router;