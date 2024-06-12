// Validating token before user can access protected routes
import jwt from 'jsonwebtoken'

export const authRequired = (req, res, next) => {
    try {
        const {token} = req.cookies

        if(!token) return res.status(401).json({message: "Authorization Denied"})

        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if(err) return res.status(403).json({message: "Invalid token" })

            req.User = user
            
            next()
        })
    } catch (error) {
        res.status(404).json({ error: error })
    }

}