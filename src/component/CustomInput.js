import React, { useState } from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';


const CustomInput = ({
    placeholder,
    value,
    onChangeText,
    keyboardType = 'default',
    secureTextEntry = false,
    style = {},
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    const isPasswordField = secureTextEntry;

    return (
        <View style={[styles.inputContainer, style]}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                secureTextEntry={isPasswordField && !showPassword}
                autoCapitalize="none"
            />
            {isPasswordField && (
                <TouchableOpacity onPress={togglePasswordVisibility}>
                    <Feather name={showPassword ? 'eye' : 'eye-off'} size={24} color="gray" />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginVertical: 8,
        height: 60, // 👈 Fixed height for consistency
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 0,  // Prevent vertical padding affecting height
    },
});


export default CustomInput;
