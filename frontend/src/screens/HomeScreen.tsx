import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const quickActions = [
    { title: 'Continue learning', route: 'Learn' as never, description: 'Explore the next lesson' },
    { title: 'Take a quiz', route: 'Quiz' as never, description: 'Challenge your skills' },
    { title: 'Scan your device', route: 'Scanner' as never, description: 'Review your hygiene checklist' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.heroCard}>
        <Text style={styles.eyebrow}>CyberWise</Text>
        <Text style={styles.title}>Build safer habits one lesson at a time.</Text>
        <Text style={styles.subtitle}>
          Friendly lessons, guided checklists, and quick quizzes help beginners feel confident online.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today’s tip</Text>
        <Text style={styles.cardText}>
          Turn on two-factor authentication whenever possible to add a second layer of protection.
        </Text>
      </View>

      <View style={styles.grid}>
        {quickActions.map((action) => (
          <TouchableOpacity
            key={action.title}
            style={styles.actionCard}
            onPress={() => navigation.navigate(action.route)}
          >
            <Text style={styles.actionTitle}>{action.title}</Text>
            <Text style={styles.actionDescription}>{action.description}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Your progress</Text>
        <Text style={styles.cardText}>4 lessons completed • 2 quizzes started • Security score 82%</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8fbff',
  },
  heroCard: {
    backgroundColor: '#2563eb',
    borderRadius: 24,
    padding: 24,
    marginBottom: 16,
  },
  eyebrow: {
    color: '#dbeafe',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    marginBottom: 8,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    color: '#dbeafe',
    fontSize: 16,
    lineHeight: 22,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
    color: '#0f172a',
  },
  cardText: {
    color: '#475569',
    fontSize: 14,
    lineHeight: 20,
  },
  grid: {
    gap: 12,
    marginBottom: 16,
  },
  actionCard: {
    backgroundColor: '#eff6ff',
    borderRadius: 16,
    padding: 16,
  },
  actionTitle: {
    color: '#1d4ed8',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  actionDescription: {
    color: '#475569',
    fontSize: 13,
  },
});

export default HomeScreen;