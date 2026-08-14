import express from 'express';
import authController from '../controllers/authController';

const router = express.Router();

router.post('/signup', authController.signUp);
router.post('/login', authController.login);
router.post('/verify-email', authController.verifyEmail);
router.post('/forgot-password', authController.forgotPassword);

export default router;