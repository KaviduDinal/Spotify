import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://sdayfktbkawdghnhamkp.supabase.co"
const supabaseAnonKey = "YOUR_PUBLIC_ANON_KEY"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
