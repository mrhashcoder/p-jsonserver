// Import Libraries Here
const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')

// Express APP Setup
const app = express()

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Importing Routes Here
const photoAlbumRouter = require('./P-photoalbum/routes')
const baseRouter = require('./P-Base/routes')

// Applying Routes Here
app.use(photoAlbumRouter)
app.use(baseRouter)

module.exports = app
