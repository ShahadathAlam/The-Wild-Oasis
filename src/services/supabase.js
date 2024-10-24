import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gmmxprbqcaxwnjnjeoeg.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtbXhwcmJxY2F4d25qbmplb2VnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk3NjEyMTksImV4cCI6MjA0NTMzNzIxOX0.AgUAf5descLQIK5OhSLC7d1MukT0zDE2Ljm-LnW6yWM";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
