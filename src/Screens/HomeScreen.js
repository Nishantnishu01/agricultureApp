import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ user, onLogout }) => {
    if (!user) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>User not found</Text>
            </View>
        );
    }

    const name = user.user_metadata?.name || 'Unknown';
    const mobile = user.user_metadata?.mobile || 'Not provided';

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome, {name}</Text>
            <Text style={styles.text}>Email: {user.email}</Text>
            <Text style={styles.text}>Mobile: {mobile}</Text>
            <Button title="Logout" onPress={onLogout} />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    text: {
        fontSize: 18,
        marginBottom: 8,
    },
});
