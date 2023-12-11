import { SupabaseClient, createClient } from '@supabase/supabase-js'

// Creating a single supabase client for interacting with my database
export const supabase = createClient("https://nqrzsqeicppxwdcuagai.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xcnpzcWVpY3BweHdkY3VhZ2FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE2Mjg0OTYsImV4cCI6MjAxNzIwNDQ5Nn0.-TwrsMv4SQ-LlU92AfV3uCT90Pxe-NIyh2rz5oRPbNo")
  
