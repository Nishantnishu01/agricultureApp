import React, { useState, useEffect } from 'react';
import { SafeAreaView, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase } from './src/services/supabaseClient';
import LoginScreen from './src/Auth/LoginScreen';
import RegisterScreen from './src/Auth/RegisterScreen';
import HomeScreen from './src/Auth/HomeScreen';
import LoadingScreen from './src/Auth/LoadingScreen';
import { useScreenDimensions } from './src/hooks/useScreenDimensions';
import { styles } from './src/styles/styles';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('login');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const screenData = useScreenDimensions();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) throw error;
      if (session?.user) {
        const userData = await AsyncStorage.getItem('userData');
        if (userData) {
          setUser(JSON.parse(userData));
        } else {
          setUser(session.user);
        }
      }
    } catch (error) {
      console.error('Error checking user:', error);
    } finally {
      setLoading(false);
    }
  };


  const logout = async () => {
    try {
      await supabase.auth.signOut();
      await AsyncStorage.removeItem('userData');
      setUser(null);
    } catch (error) {
      Alert.alert('Error', 'Failed to logout');
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  if (user) {
    return <HomeScreen user={user} onLogout={logout} screenData={screenData} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {currentScreen === 'login' ? (
          <LoginScreen
            onNavigateToRegister={() => setCurrentScreen('register')}
            onLoginSuccess={setUser}
            screenData={screenData}
          />
        ) : (
          <RegisterScreen
            onNavigateToLogin={() => setCurrentScreen('login')}
            onRegisterSuccess={setUser}
            screenData={screenData}
          />
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default App;