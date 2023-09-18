const dotenv = require('dotenv')

dotenv.config()

const PORT = process.env.PORT || 5000
const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_KEY = process.env.SUPABASE_KEY
const PHOTO_ALBUM_KEY = process.env.PHOTO_ALBUM_KEY

module.exports = {
    PORT,
    SUPABASE_URL,
    SUPABASE_KEY,
    PHOTO_ALBUM_KEY
}
