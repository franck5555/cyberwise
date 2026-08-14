import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import useAuth from '../../hooks/useAuth';

const VerifyEmailScreen = () => {
    const { resetPassword } = useAuth();

    const handleResendEmail = () => {
        resetPassword('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Verify Your Email</Text>
            <Text style={styles.message}>
                A verification email has been sent to your email address. Please check your inbox and follow the instructions to verify your account.
            </Text>
            <Button title="Reset Password" onPress={handleResendEmail} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    message: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 24,
    },
});

export default VerifyEmailScreen;