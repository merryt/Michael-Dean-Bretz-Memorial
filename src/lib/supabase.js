import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ktdkqjbzjtnojbfghiop.supabase.co';
const SUPABASE_PUBLIC_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0ZGtxamJ6anRub2piZmdoaW9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTc5MzgzMTMsImV4cCI6MTk3MzUxNDMxM30.UczcyfDFmgUe_vbDcdDr-KJtS-BTsiX4CsUL2dEage0'

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY)
export default supabase