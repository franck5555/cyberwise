import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface LessonCardProps {
  lesson: {
    id: string;
    title: string;
    description: string;
    difficulty: string;
    duration: string;
  };
  onPress: () => void;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{lesson.title}</Text>
      <Text style={styles.description}>{lesson.description}</Text>
      <Text style={styles.meta}>{lesson.difficulty} • {lesson.duration}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
    color: '#0f172a',
  },
  description: {
    fontSize: 13,
    color: '#64748b',
    marginBottom: 6,
  },
  meta: {
    fontSize: 12,
    color: '#2563eb',
    fontWeight: '600',
  },
});

export default LessonCard;