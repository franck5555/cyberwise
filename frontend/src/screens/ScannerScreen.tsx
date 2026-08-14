import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ScannerChecklist from '../components/ScannerChecklist';

const ScannerScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Device security scanner</Text>
      <Text style={styles.description}>
        This self-assessment checklist helps you review everyday security habits without probing your network.
      </Text>
      <ScannerChecklist />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8fbff',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
    color: '#0f172a',
  },
  description: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 16,
    lineHeight: 20,
  },
});

export default ScannerScreen;