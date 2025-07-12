import { createClient } from '@supabase/supabase-js';
import 'cross-fetch/polyfill';

export const supabase = createClient(
    'https://mwrmnkqdqnyskvugledg.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13cm1ua3FkcW55c2t2dWdsZWRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwODg1NDMsImV4cCI6MjA2NzY2NDU0M30.W9SshNxPZ59kf9shkoFEmI7ntA1eCsa3a-oFhUCyctk'
);

