import { createClient } from '@supabase/supabase-js';
import 'cross-fetch/polyfill';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-url-polyfill/auto';

const supabaseUrl = 'https://mwrmnkqdqnyskvugledg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13cm1ua3FkcW55c2t2dWdsZWRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwODg1NDMsImV4cCI6MjA2NzY2NDU0M30.W9SshNxPZ59kf9shkoFEmI7ntA1eCsa3a-oFhUCyctk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});
