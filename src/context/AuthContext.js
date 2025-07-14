import React, { createContext, useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { supabase } from '../services/supabaseClient';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // ✅ Check session on app start
    useEffect(() => {
        const checkUser = async () => {
            try {
                const { data, error } = await supabase.auth.getSession();
                if (error) throw error;
                if (data?.session?.user) {
                    // ✅ Include metadata
                    setUser(data.session.user);
                }
            } catch (err) {
                console.log('Error getting session:', err.message);
            } finally {
                setLoading(false);
            }
        };

        checkUser();

        // ✅ Listen to auth changes and update user
        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            if (session?.user) {
                setUser(session.user); // includes user_metadata like name, mobile
            } else {
                setUser(null);
            }
        });

        return () => {
            listener.subscription.unsubscribe();
        };
    }, []);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = async () => {
        try {
            await supabase.auth.signOut();
            setUser(null);
        } catch (error) {
            Alert.alert('Error', 'Logout failed');
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
