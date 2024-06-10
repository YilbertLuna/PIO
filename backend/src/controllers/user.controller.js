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
            password: password
        })

        res.status(201).json({
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            password: newUser.password,
            followers: newUser.followers,
            following: newUser.following
        })

    } catch (error) {
        res.status(400).json({ error: error})
    }

}


export const login = async (req, res) => {
    try {

        const { email, password } = req.body

        // validate data
        if(!email | !password) return res.status(403).json({error: 'Fill in the fields'})
        
        const findUser = await users.findOne({
            where: {
                email: email,
                password: password
            }
        })

        // validate if user exists
        if(!findUser) res.status(404).json({error: 'User dont exist'})
        
        res.status(200).json({welcome: findUser.name})

    } catch (error) {
        res.status(400).json({ error: error})
    }
}

export const getUsers = async (req, res) => {
    try {
        
        const allUsers = await users.findAll()

        if(allUsers.length <= 0) return res.status(403).json({alert: 'User already exists'})

        res.status(200).json(allUsers)

    } catch (error) {
        res.status(400).json({ error: error})
    }
}

export const updateUser = async (req, res) => {

    try {
        const { id } = req.params
        const { name, bio, } = req.body

        const user = await users.findByPk(id)

        user.name = name
        user.bio = bio

        await user.save()

        res.json(user)
        
    } catch (error) {
        res.status(400).json({ error: error})
    }

}