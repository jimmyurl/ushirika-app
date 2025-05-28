import { createClient } from '@supabase/supabase-js';

// Retrieve Supabase URL and Anon Key from environment variables
// It's crucial to use environment variables for sensitive keys
// For Vite, these are typically VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if environment variables are set
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL or Anon Key is missing from environment variables.');
  // You might want to throw an error or handle this more gracefully in a production app
}

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);