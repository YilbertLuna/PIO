import { users } from '../models/user.js'

export const register = async (req, res) => {

    try {
        const { name, email, password } = req.body

        // validate data
        if(!name | !email | !password) return res.status(403).json({error: 'Fill in the fields'})

        // validate email
        const user = await users.findOne({
            where: {
                email: email
            }
        })

        if(user) return res.status(403).json({error: 'User already exists'})

        // create user
        const newUser = await users.create({
            name: name,
            email: email,
            password: 123
        })

        res.status(201).json({
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            password: 123,
            followers: newUser.followers,
            following: newUser.following
        })

    } catch (error) {
        res.status(400).json({ error: error})
    }

}