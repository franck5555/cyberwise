import { Schema, model } from 'mongoose';

const quizSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  quizId: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    required: true,
  },
  completedAt: {
    type: Date,
    default: Date.now,
  },
  answers: [
    {
      questionId: {
        type: String,
        required: true,
      },
      selectedAnswer: {
        type: String,
        required: true,
      },
    },
  ],
});

const Quiz = model('Quiz', quizSchema);

export default Quiz;