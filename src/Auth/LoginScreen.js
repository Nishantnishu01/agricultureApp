import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Alert,
} from 'react-native';
import { getUserData, storeUserData } from '../Utils/storege';
import { styles } from '../styles/styles';
import { supabase } from '../services/supabaseClient';
import CustomInput from '../component/CustomInput';

const LoginScreen = ({ onNavigateToRegister, onLoginSuccess, screenData }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const isTablet = screenData.width > 768;
    const isLandscape = screenData.width > screenData.height;

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        setLoading(true);
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                Alert.alert('Login Error', error.message);
                return;
            }

            const userData = await getUserData();
            if (userData) {
                onLoginSuccess(userData);
            } else {
                const userObj = {
                    id: data.user.id,
                    email: data.user.email,
                    name: '',
                    mobile: '',
                };
                await storeUserData(userObj);
                onLoginSuccess(userObj);
            }
        } catch (error) {
            Alert.alert('Error', 'An unexpected error occurred');
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
                ]}>Login</Text>

                <CustomInput
                    style={[
                        styles.input,
                        isTablet && styles.tabletInput
                    ]}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <CustomInput
                    style={[
                        styles.input,
                        isTablet && styles.tabletInput
                    ]}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <TouchableOpacity
                    style={[
                        styles.button,
                        loading && styles.buttonDisabled,
                        isTablet && styles.tabletButton
                    ]}
                    onPress={handleLogin}
                    disabled={loading}
                >
                    <Text style={[
                        styles.buttonText,
                        isTablet && styles.tabletButtonText
                    ]}>
                        {loading ? 'Logging in...' : 'Login'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.linkButton}
                    onPress={onNavigateToRegister}
                >
                    <Text style={[
                        styles.linkText,
                        isTablet && styles.tabletLinkText
                    ]}>
                        Don't have an account? Register here
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default LoginScreen;