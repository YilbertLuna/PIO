// created model table to publications fot db

import { DataTypes } from 'sequelize';
import { sequelize } from '../../bd.js';

export const publications = sequelize.define(
    'Publications',

    {
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        content: {
            type: DataTypes.STRING
        },
        likes: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        }
    }
)
