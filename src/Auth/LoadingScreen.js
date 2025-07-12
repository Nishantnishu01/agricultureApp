import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { styles } from '../styles/styles';

const LoadingScreen = () => {
    return (
        <SafeAreaView style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Loading...</Text>
        </SafeAreaView>
    );
};

export default LoadingScreen;