import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'postgresql',
    port: 5432,
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
})