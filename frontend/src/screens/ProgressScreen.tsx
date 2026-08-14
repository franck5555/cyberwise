import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import useUserProgress from '../hooks/useUserProgress';
import { colors } from '../constants/colors';

const ProgressScreen = () => {
  const { progress } = useUserProgress('demo-user');
  const achievements = ['First lesson completed', 'Quiz starter'];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Your Progress</Text>
      <View style={styles.progressContainer}>
        <Text style={styles.label}>Lessons Completed:</Text>
        <Text style={styles.value}>{progress?.lessonsCompleted.length ?? 0}</Text>
      </View>
      <View style={styles.progressContainer}>
        <Text style={styles.label}>Current Lesson:</Text>
        <Text style={styles.value}>{progress?.currentLessonId ?? 'None yet'}</Text>
      </View>
      <View style={styles.progressContainer}>
        <Text style={styles.label}>Progress Percentage:</Text>
        <Text style={styles.value}>{progress?.progressPercent ?? 0}%</Text>
      </View>
      <Text style={styles.title}>Achievements</Text>
      {achievements.length > 0 ? (
        achievements.map((achievement: string, index: number) => (
          <Text key={index} style={styles.achievement}>
            {achievement}
          </Text>
        ))
      ) : (
        <Text style={styles.noAchievements}>No achievements yet!</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  progressContainer: {
    marginBottom: 12,
  },
  label: {
    fontSize: 18,
    color: colors.gray,
  },
  value: {
    fontSize: 20,
    fontWeight: '600',
  },
  achievement: {
    fontSize: 16,
    color: colors.success,
    marginVertical: 4,
  },
  noAchievements: {
    fontSize: 16,
    color: colors.danger,
  },
});

export default ProgressScreen;