import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Alert,
} from 'react-native';

import { supabase } from '../services/supabaseClient';
import { storeUserData } from '../src/Utils/storege';
import { styles } from '../styles/styles';
import CustomInput from '../component/CustomInput';
import CustomButton from '../component/CustomButton';

const RegisterScreen = ({ onNavigateToLogin, onRegisterSuccess, screenData }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const isTablet = screenData.width > 768;
    const isLandscape = screenData.width > screenData.height;

    const handleRegister = async () => {
        if (!name || !email || !mobile || !password || !confirmPassword) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }

        if (password.length < 6) {
            Alert.alert('Error', 'Password must be at least 6 characters long');
            return;
        }

        setLoading(true);
        try {
            console.log('🔍 Starting registration...');
            console.log('Email:', email);
            console.log('Password length:', password.length);

            // Test if supabase client is working
            if (!supabase) {
                throw new Error('Supabase client not initialized');
            }

            console.log('📡 Calling supabase.auth.signUp...');
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
            });

            console.log('📨 Supabase response received');
            console.log('Data:', data);
            console.log('Error:', error);

            if (error) {
                console.log('❌ Registration error:', error.message);
                Alert.alert('Registration Error', error.message);
                return;
            }

            if (!data || !data.user) {
                Alert.alert(
                    'Registration Success',
                    'Check your email for verification. User will be active after verification.'
                );
                return;
            }

            console.log('✅ Registration successful, storing user data...');

            const userData = {
                id: data.user.id,
                name,
                mobile,
            };

            await storeUserData(userData);

            console.log('✅ User data stored successfully');

            Alert.alert('Success', 'Account created successfully!',);
        } catch (error) {
            console.error('❌ Unexpected error in registration:');
            console.error('Message:', error.message);
            console.error('Stack:', error.stack);
            console.error('Full error object:', error);

            Alert.alert('Error', 'Registration failed: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ScrollView
            contentContainerStyle={[
                styles.screenContainer,
                isTablet && styles.tabletScreenContainer,
                isLandscape && styles.landscapeScreenContainer
            ]}
            showsVerticalScrollIndicator={false}
        >
            <View style={[
                styles.formContainer,
                isTablet && styles.tabletFormContainer,
                isLandscape && styles.landscapeFormContainer
            ]}>
                <Text style={[
                    styles.title,
                    isTablet && styles.tabletTitle
                ]}>Create Account</Text>

                <View style={[
                    isTablet && isLandscape && styles.landscapeInputRow
                ]}>
                    <CustomInput
                        placeholder="Full Name"
                        value={name}
                        onChangeText={setName}
                        style={[styles.input, isTablet && styles.tabletInput, isTablet && isLandscape && styles.landscapeInput]}
                    />

                    <CustomInput
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        style={[styles.input, isTablet && styles.tabletInput, isTablet && isLandscape && styles.landscapeInput]}
                    />

                    <CustomInput
                        placeholder="Mobile Number"
                        value={mobile}
                        onChangeText={setMobile}
                        keyboardType="phone-pad"
                        style={[styles.input, isTablet && styles.tabletInput, isTablet && isLandscape && styles.landscapeInput]}
                    />

                    <CustomInput
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        style={[styles.input, isTablet && styles.tabletInput, isTablet && isLandscape && styles.landscapeInput]}
                    />

                    <CustomInput
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry={false}
                        style={[styles.input, isTablet && styles.tabletInput, isTablet && isLandscape && styles.landscapeInput]}
                    />
                </View>
                <CustomButton
                    onPress={handleRegister}
                    title="Login"
                    loading={loading}
                    style={[isTablet && styles.tabletButton]}
                    textStyle={[isTablet && styles.tabletButtonText]}
                />

                <TouchableOpacity
                    style={styles.linkButton}
                    onPress={onNavigateToLogin}
                >
                    <Text style={[
                        styles.linkText,
                        isTablet && styles.tabletLinkText
                    ]}>
                        Already have an account? Login here
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default RegisterScreen;