const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.get('/photoalbum/:id', controller.getPhotoAlbum)

router.post('/photoalbum', controller.postPhotoAlbum)

router.patch('/photoalbum/:id')

router.delete('/photoalbum/:id')

module.exports = router
