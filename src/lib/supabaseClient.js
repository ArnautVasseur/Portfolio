import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://rxbtdrzihdxzihsdehaw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4YnRkcnppaGR4emloc2RlaGF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzMTMyNjYsImV4cCI6MTk5Mzg4OTI2Nn0.xrBfckJ4jBnPoHpSUsCc94xcsT3sae2_CLI6TI62L40')