// create model table for user on db

import { DataTypes } from 'sequelize';
import { sequelize } from '../../bd.js';
import { publications } from './publications.js';

export const users = sequelize.define(
    'Users',

    {
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        bio: {
            type: DataTypes.STRING
        },
        followers: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        following: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    }
)

// create relationship of Users and Publications
users.hasMany(publications, {
    foreignKey: 'userId',
    sourceKey: 'id'
})

publications.belongsTo(users, {
    foreignKey: 'userId',
    targetId: 'id'
})