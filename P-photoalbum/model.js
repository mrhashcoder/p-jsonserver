const mongoose = require('mongoose')

const PhotoSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    information: {
        type: String,
        required: true,
    },
})

const PhotoAlbumSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    subtitles: {
        type: String,
        required: true,
    },

    photos: {
        type: [PhotoSchema],
        required: true,
    },
})

module.exports = mongoose.model('PhotoAlbum', PhotoAlbumSchema)
