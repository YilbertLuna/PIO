import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'postgresql',
    port: 5432,
    database: 'pio',
    username: 'admin',
    password: 'admin',
})

export const connectDb = async () => {
    try {
        await sequelize.authenticate()
        console.log('database connected successfully 🟢')
    } catch (error) {
        console.log(`there is an error 🔴 ${error}`)
    }
}