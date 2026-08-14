import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth';
import userRoutes from './routes/users';
import lessonRoutes from './routes/lessons';
import quizRoutes from './routes/quiz';
import scannerRoutes from './routes/scanner';
import errorHandler from './middleware/errorHandler';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT || 5000);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/lessons', lessonRoutes);
app.use('/api/v1/quiz', quizRoutes);
app.use('/api/v1/scanner', scannerRoutes);

app.use(errorHandler);

const startServer = async () => {
  try {
    if (process.env.MONGODB_URI) {
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as mongoose.ConnectOptions);
      console.log('Connected to MongoDB');
    } else {
      console.log('MONGODB_URI not set, continuing without database connection');
    }

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Server startup error:', err);
    process.exit(1);
  }
};

startServer();