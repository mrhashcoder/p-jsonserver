const app = require('./app')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

// Setting up Env Variables
dotenv.config()
const PORT = process.env.PORT || 5000


const server = app.listen(PORT, () => {
    console.log('SERVER is listening on port : ' + PORT)
})
