import express from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/userController';
import { authenticate } from '../middleware/authenticate';

const router = express.Router();

router.get('/', authenticate, getAllUsers);
router.get('/:id', authenticate, getUserById);
router.post('/', createUser);
router.put('/:id', authenticate, updateUser);
router.delete('/:id', authenticate, deleteUser);

export default router;