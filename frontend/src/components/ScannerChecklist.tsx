import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const checklistItems = [
  { id: 1, label: 'Password strength reviewed', value: false },
  { id: 2, label: 'OS and app updates checked', value: false },
  { id: 3, label: 'Screen lock enabled', value: false },
  { id: 4, label: 'Biometric protection enabled', value: false },
  { id: 5, label: 'App permissions reviewed', value: false },
  { id: 6, label: 'Browser security settings checked', value: false },
  { id: 7, label: 'Public Wi-Fi habits reviewed', value: false },
  { id: 8, label: 'Privacy settings reviewed', value: false },
];

const ScannerChecklist = () => {
  const [checklist, setChecklist] = useState(checklistItems);

  const toggleCheckbox = (id: number) => {
    setChecklist((prevChecklist) =>
      prevChecklist.map((item) => (item.id === id ? { ...item, value: !item.value } : item))
    );
  };

  const completedCount = useMemo(() => checklist.filter((item) => item.value).length, [checklist]);
  const score = Math.round((completedCount / checklist.length) * 100);
  const riskLevel = score >= 75 ? 'Low risk' : score >= 40 ? 'Medium risk' : 'High risk';

  return (
    <View style={styles.container}>
      <View style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>Your score</Text>
        <Text style={styles.summaryValue}>{score}/100</Text>
        <Text style={styles.summaryRisk}>{riskLevel}</Text>
      </View>

      {checklist.map((item) => (
        <Pressable key={item.id} style={styles.checkboxContainer} onPress={() => toggleCheckbox(item.id)}>
          <View style={[styles.checkbox, item.value && styles.checkboxChecked]}>
            {item.value ? <Text style={styles.checkmark}>✓</Text> : null}
          </View>
          <Text style={styles.label}>{item.label}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  summaryCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  summaryTitle: {
    color: '#64748b',
    fontSize: 13,
    marginBottom: 4,
  },
  summaryValue: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0f172a',
  },
  summaryRisk: {
    color: '#2563eb',
    fontWeight: '600',
    marginTop: 4,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 1,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#94a3b8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: '#2563eb',
    borderColor: '#2563eb',
  },
  checkmark: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
  label: {
    fontSize: 14,
    color: '#0f172a',
    flex: 1,
  },
});

export default ScannerChecklist;