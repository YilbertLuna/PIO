import { users } from '../models/user.js'
import bcrypt from "bcryptjs"
import { createdAccessToken } from '../libs/jwt.js'

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

        const cryptPassword = await bcrypt.hash(password, 10)

        // create user
        const newUser = await users.create({
            name: name,
            email: email,
            password: cryptPassword
        })

        // created token
        const token = await createdAccessToken({id: newUser.id})
        //save token on cookie
        res.cookie('token', token)

        res.status(201).json({
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            followers: newUser.followers,
            following: newUser.following,
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

        // validate password
        const findUser = await users.findOne({
            where: {
                email: email
            }
        })

        if(!findUser) return res.status(400).json({error: 'email is dont exist'})

        const isPassword = await bcrypt.compare(password, findUser.password)

        if(!isPassword) return res.status(400).json({error: 'password is invalid'})
        
        // created token
        const token = await createdAccessToken({id: findUser.id})
        // save token on cookie
        res.cookie('token', token)
        
        res.status(200).json({
            id: findUser.id,
            name: findUser.name,
            email: findUser.email,
            followers: findUser.followers,
            following: findUser.following,
            created_at: findUser.createdAt
        })

    } catch (error) {
        res.status(400).json({ error: error})
    }
}

export const profile = async (req, res) => {

    const userFound = await users.findOne({
        where: {
            id: req.User.id
        }
    })

    if(!userFound) return res.status(404).json({ error: 'User not found' })

    return res.status(200).json({ userFound: userFound })
}

export const logout = (req, res) => {

    // delete token on cookie
    res.cookie('token', '', {
        expires: new Date(0)
    })

    res.sendStatus(200)
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