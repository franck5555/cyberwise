import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { resetPassword } from '../../services/authService';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handlePasswordReset = async () => {
    try {
      await resetPassword(email);
      Alert.alert('Success', 'Password reset email sent!');
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Unable to reset password';
      Alert.alert('Error', message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Forgot Password</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button title="Reset Password" onPress={handlePasswordReset} />
    </View>
  );
};

export default ForgotPasswordScreen;