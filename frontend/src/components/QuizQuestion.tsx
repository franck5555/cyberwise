import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Quiz } from '../types/quiz';

interface QuizQuestionProps {
  question: Quiz;
  onAnswer: (answer: string) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ question, onAnswer }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{question.questionText}</Text>
      <Text style={styles.level}>Level: {question.level}</Text>
      {question.answers.map((answer, index) => (
        <TouchableOpacity key={`${question.id}-${index}`} style={styles.option} onPress={() => onAnswer(answer)}>
          <Text style={styles.optionText}>{answer}</Text>
        </TouchableOpacity>
      ))}
      <Text style={styles.tip}>{question.explanation}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
    color: '#0f172a',
  },
  level: {
    color: '#2563eb',
    fontWeight: '600',
    marginBottom: 12,
  },
  option: {
    backgroundColor: '#eff6ff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
  },
  optionText: {
    color: '#1e3a8a',
    fontWeight: '600',
  },
  tip: {
    marginTop: 12,
    color: '#475569',
    fontSize: 13,
    lineHeight: 18,
  },
});

export default QuizQuestion;