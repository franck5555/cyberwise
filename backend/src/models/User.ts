import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  photoUrl: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastLogin: {
    type: Date,
    default: null,
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  learningLevel: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'beginner',
  },
  xp: {
    type: Number,
    default: 0,
  },
  securityScore: {
    type: Number,
    default: 0,
  },
  streakCount: {
    type: Number,
    default: 0,
  },
});

const User = model('User', userSchema);

export default User;