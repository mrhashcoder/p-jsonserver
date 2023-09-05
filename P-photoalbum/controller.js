const crypto = require('crypto')
const validatePhotoAlbum = require('./validation')
const supabase = require('../supabase')

const getPhotoAlbum = async (req, res) => {
    try {
        const albumId = req.params.id
        console.log(albumId)
        const { data, errors } = await supabase
            .from('PhotoAlbum')
            .select()
            .eq('id', albumId)

        // TODO: Create Validation and error handling here
        if (errors) {
            console.error(e)
            return res.status(500).json({
                status: 'failed',
                message: 'EROOR AT SERVER SIDE',
                data: null,
            })
        }
        const album = data[0]
        if (album == null) {
            return res.status(404).json({
                status: 'failed',
                message: 'ALBUM NOT FOUND',
                data: null,
            })
        }

        return res.status(200).json({
            status: 'success',
            message: 'ALBUM FOUND',
            data: album,
        })
    } catch (e) {
        console.error(e)
        return res.status(500).json({
            status: 'failed',
            message: 'EROOR AT SERVER SIDE',
            data: null,
        })
    }
}

const postPhotoAlbum = async (req, res) => {
    try {
        const albumData = {
            id: crypto.randomBytes(4).toString('hex'),
            password: req.body.password,
            title: req.body.title,
            subtitle: req.body.subtitle,
            userId: req.body.userid,
            photos: req.body.photos,
        }

        if (validatePhotoAlbum(albumData) == false) {
            return res.status(400).json({
                status: 'failed',
                message: 'INVALID INPUT',
                data: null,
            })
        }
        const { errors } = await supabase.from('PhotoAlbum').insert({
            id: albumData.id,
            password: albumData.password,
            title: albumData.title,
            subtitle: albumData.subtitle,
            userId: albumData.userId,
            photos: albumData.photos,
        })

        if (errors) {
            return res.status(500).json({
                status: 'failed',
                message: 'EROOR AT SERVER SIDE',
                data: null,
            })
        }
        // TODO: CREATE FUNCTION FOR URL GENERATION Here
        const url = 'http://'

        return res.status(201).json({
            status: 'success',
            message: 'ALBUM CREATED',
            data: {
                id: albumData.id,
                url: url,
            },
        })
    } catch (e) {
        console.error(e)
        return res.status(500).json({
            status: 'failed',
            message: 'EROOR AT SERVER SIDE',
            data: null,
        })
    }
}

const patchPhotoAlbum = async (req, res) => {}

const deletePhotoAlbum = async (req, res) => {}

module.exports = {
    getPhotoAlbum,
    postPhotoAlbum,
    patchPhotoAlbum,
    deletePhotoAlbum,
}
