const app = require('./app')
const config = require('./config')
const mongoose = require('mongoose')

const PORT = config.PORT

const server = app.listen(PORT, () => {
    console.log('SERVER is listening on port : ' + PORT)
})
