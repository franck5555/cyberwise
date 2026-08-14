import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import QuizQuestion from '../components/QuizQuestion';
import { Quiz } from '../types/quiz';

const quizData: Quiz[] = [
  {
    id: '1',
    questionText: 'Which password is strongest?',
    answers: ['Summer2024', 'Password123', 'P@ssw0rd!2026', 'abc123'],
    correctAnswer: 'P@ssw0rd!2026',
    explanation: 'A strong password is long and mixes letters, numbers, and symbols.',
    level: 'Beginner',
  },
  {
    id: '2',
    questionText: 'What should you do if a message asks for your password right away?',
    answers: ['Reply with your password to verify', 'Click the link and enter it', 'Ignore it and verify through a trusted source', 'Forward it to everyone'],
    correctAnswer: 'Ignore it and verify through a trusted source',
    explanation: 'Urgent requests for passwords are a common sign of phishing.',
    level: 'Beginner',
  },
  {
    id: '3',
    questionText: 'Why is two-factor authentication useful?',
    answers: ['It replaces passwords', 'It adds a second layer of protection', 'It makes apps faster', 'It prevents all malware'],
    correctAnswer: 'It adds a second layer of protection',
    explanation: '2FA makes it much harder for attackers to access your accounts even if a password is stolen.',
    level: 'Intermediate',
  },
];

const QuizScreen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = useMemo(() => quizData[currentQuestionIndex], [currentQuestionIndex]);

  const handleAnswer = (selectedAnswer: string) => {
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quick quiz</Text>
      <Text style={styles.subtitle}>Pick the safest option for everyday security decisions.</Text>

      {quizCompleted ? (
        <View style={styles.resultCard}>
          <Text style={styles.resultTitle}>Quiz complete</Text>
          <Text style={styles.resultScore}>{score} / {quizData.length} correct</Text>
          <Text style={styles.resultText}>Nice work. Keep practicing and you will build stronger instincts.</Text>
          <TouchableOpacity style={styles.button} onPress={restartQuiz}>
            <Text style={styles.buttonText}>Try again</Text>
          </TouchableOpacity>
        </View>
      ) : (
        currentQuestion && <QuizQuestion question={currentQuestion} onAnswer={handleAnswer} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8fbff',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 4,
    color: '#0f172a',
  },
  subtitle: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 16,
  },
  resultCard: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  resultTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
  },
  resultScore: {
    fontSize: 18,
    color: '#2563eb',
    fontWeight: '700',
    marginBottom: 8,
  },
  resultText: {
    color: '#475569',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    borderRadius: 999,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },
});

export default QuizScreen;