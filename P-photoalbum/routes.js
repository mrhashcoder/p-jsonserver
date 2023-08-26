const express = require('express')
const router = express.Router()

router.get('/photoalbum/:id')

router.post('/photoalbum')

router.patch('/photoalbum/:id')

router.delete('/photoalbum/:id')

module.exports = router
