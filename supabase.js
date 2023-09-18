const createClient = require('@supabase/supabase-js').createClient
const config = require('./config')

const supabaseUrl = config.SUPABASE_URL
const supabaseKey = config.SUPABASE_KEY

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
