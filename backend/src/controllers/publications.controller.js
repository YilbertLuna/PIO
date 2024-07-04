import { publications } from "../models/publications.js"
import { users } from "../models/user.js"

export async function createdPublication(req,res) {
    try {
        const {publication} = req.body
        
        if(!publication) return res.status(403).json({error: 'Content is required'})

        const findUserCreator = await users.findByPk(req.User.id)

        const newPublication = await publications.create({
            content: publication,
            userId: req.User.id
        })

        res.status(200).json({user: findUserCreator, publication: [newPublication]})

    } catch (error) {
        res.status(400).json({error: 'error creating publication'})
    }
}

export async function getMyPublications(req, res) {
    try {

        const myPublications = await publications.findAll({
            where: {
                userId: req.User.id
            },
            include: [{model: users, attributes: ['id', 'name']}]
        })

        res.status(200).json(myPublications)
        
    } catch (error) {
        res.status(400).json({error: 'error getting my publications'})
    }
}

export async function getPublications(req, res) {
    try {

        const allPubliscations = await publications.findAll({
            order: [['createdAt', 'DESC']],
            limit: 20,
            include: [{model: users, attributes: ['id', 'name']}]
        })

        res.status(200).json(allPubliscations)
        
    } catch (error) {
        res.status(400).json({error: 'error getting publication'})
    }
}

export async function deletePublication (req, res) {
    try {

        const { id } = req.params

        const finPublication = await publications.findOne({
            where: {
                id: id
            },
        })

        if(finPublication.userId === req.User.id){
            await finPublication.destroy()
            return res.sendStatus(200)
        } else return res.status(404).json({message: 'not cant delete this publication '})
        
    } catch (error) {
        res.status(400).json({error: 'error deleting publication'})
    }
}