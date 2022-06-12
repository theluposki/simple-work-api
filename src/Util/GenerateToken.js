import jwt from'jsonwebtoken'
import config from '../config/config.js'

export const GenerateToken = async (object) => {
    return await jwt.sign(object, config.secret, {
        expiresIn: 86400
    })
}
