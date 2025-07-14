import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = ({ user, onLogout, screenData }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home">
                {(props) => (
                    <HomeScreen
                        {...props}
                        user={user}
                        onLogout={onLogout}
                        screenData={screenData}
                    />
                )}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

export default AppNavigator;