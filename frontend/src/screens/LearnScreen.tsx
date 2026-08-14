import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import LessonCard from '../components/LessonCard';
import { lessons } from '../constants/lessons';

interface LessonSummary {
  id: string;
  title: string;
  description: string;
  content: string;
  example: string;
  interactiveCheck: string;
  difficulty: string;
  duration: string;
}

const LearnScreen = () => {
  const [selectedLessonId, setSelectedLessonId] = useState(lessons[0]?.id ?? '');
  const selectedLesson = (lessons.find((lesson) => lesson.id === selectedLessonId) ?? lessons[0]) as LessonSummary | undefined;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Interactive lessons</Text>
      <Text style={styles.subtitle}>Pick a topic to build your everyday security habits.</Text>

      <FlatList
        data={lessons}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <LessonCard lesson={item as LessonSummary} onPress={() => setSelectedLessonId(item.id)} />
        )}
      />

      {selectedLesson ? (
        <View style={styles.detailCard}>
          <Text style={styles.detailTitle}>{selectedLesson.title}</Text>
          <Text style={styles.detailMeta}>{selectedLesson.difficulty} • {selectedLesson.duration}</Text>
          <Text style={styles.detailText}>{selectedLesson.content}</Text>
          <Text style={styles.detailText}>Example: {selectedLesson.example}</Text>
          <Text style={styles.detailText}>Check: {selectedLesson.interactiveCheck}</Text>
        </View>
      ) : null}
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
  list: {
    paddingBottom: 16,
  },
  detailCard: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 16,
    marginTop: 8,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  detailTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  detailMeta: {
    color: '#2563eb',
    fontWeight: '600',
    marginBottom: 10,
  },
  detailText: {
    color: '#475569',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 6,
  },
});

export default LearnScreen;