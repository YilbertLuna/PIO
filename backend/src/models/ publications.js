// created model table to publications fot db

import { DataTypes } from 'sequelize';
import { sequelize } from '../../bd.js';

export const publications = sequelize.define(
    'Publications',

    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
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
