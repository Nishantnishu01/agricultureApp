import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, title, loading, style = {}, textStyle = {}, disabled = false }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, disabled && styles.buttonDisabled, style]}
            disabled={disabled}
        >
            <Text style={[styles.buttonText, textStyle]}>
                {loading ? 'Please wait...' : title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4CAF50',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonDisabled: {
        backgroundColor: '#ccc',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default CustomButton;
