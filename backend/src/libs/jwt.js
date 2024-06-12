// created function for creating token

import jwt from 'jsonwebtoken'

export const createdAccessToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            process.env.TOKEN_SECRET,
            {
                expiresIn: '1d'
            },
            (err, token) => {
                if(err) reject(err)
                resolve(token)
            }
        )
    })
}