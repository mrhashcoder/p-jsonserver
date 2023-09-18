const crypto = require('crypto')

const encryptPassword = (password, secret) => {
    let key = crypto
        .createHash('sha256')
        .update(String(secret))
        .digest('base64')
        .substring(0, 32)

    const iv = crypto.randomBytes(12).toString('base64')

    const cipher = crypto.createCipheriv('aes-256-gcm', key, iv)

    let encrypted = cipher.update(password, 'utf8', 'base64')

    encrypted += cipher.final('base64')

    return { encrypted, iv }
}

module.exports = encryptPassword
