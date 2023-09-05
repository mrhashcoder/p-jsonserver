const createClient = require('@supabase/supabase-js').createClient
const dotenv = require('dotenv')

dotenv.config()

const supabaseUrl = process.env.SUPBASE_URL
const supabaseKey = process.env.SUPBASE_KEY

const options = {
    db: {
        schema: 'public',
    },
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
    },
    global: {
        headers: { 'x-my-custom-header': 'my-app-name' },
    },
}

const supabase = createClient(supabaseUrl, supabaseKey, options)

console.log(supabase)

module.exports = supabase
