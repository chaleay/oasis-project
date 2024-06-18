import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://xzqaviwksyqhzvqnebpk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6cWF2aXdrc3lxaHp2cW5lYnBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg0MjEyMDIsImV4cCI6MjAzMzk5NzIwMn0.1BEDpIwmAGNRF3as3b1ELh53UYCcjLp4modVBtoEZdU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
