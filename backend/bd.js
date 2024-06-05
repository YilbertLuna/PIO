import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'postgresql',
    port: 5432,
    database: 'pio',
    username: 'admin',
    password: 'admin',
})