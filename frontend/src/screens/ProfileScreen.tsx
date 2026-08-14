import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import useAuth from '../hooks/useAuth';

const ProfileScreen = () => {
    const { user, logout } = useAuth();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <Text style={styles.label}>Name: {user ? 'Signed in user' : 'Guest'}</Text>
            <Text style={styles.label}>Email: {user?.email}</Text>
            <Button title="Logout" onPress={logout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        marginVertical: 10,
    },
});

export default ProfileScreen;