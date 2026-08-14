import { Request, Response } from 'express';
import User from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const sendVerificationEmail = async (_user: unknown) => {
  return Promise.resolve();
};

const authController = {
  signUp: async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
        emailVerified: false,
      });

      await newUser.save();
      await sendVerificationEmail(newUser);

      res.status(201).json({ message: 'User created successfully. Please verify your email.' });
    } catch (error) {
      res.status(500).json({ message: 'Error creating user', error });
    }
  },

  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
      res.status(200).json({ token, user });
    } catch (error) {
      res.status(500).json({ message: 'Error logging in', error });
    }
  },

  verifyEmail: async (req: Request, res: Response) => {
    const { token } = req.params;

    try {
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET || 'secret');
      const user = await User.findById(decoded.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      user.emailVerified = true;
      await user.save();

      res.status(200).json({ message: 'Email verified successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error verifying email', error });
    }
  },

  forgotPassword: async (req: Request, res: Response) => {
    const { email } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Logic to send password reset email goes here

      res.status(200).json({ message: 'Password reset email sent' });
    } catch (error) {
      res.status(500).json({ message: 'Error sending password reset email', error });
    }
  },

  changePassword: async (req: Request, res: Response) => {
    const { userId, oldPassword, newPassword } = req.body;

    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const isMatch = await bcrypt.compare(oldPassword, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Old password is incorrect' });
      }

      user.password = await bcrypt.hash(newPassword, 10);
      await user.save();

      res.status(200).json({ message: 'Password changed successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error changing password', error });
    }
  },
};

export default authController;