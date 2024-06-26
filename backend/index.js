import 'dotenv/config'
import app from './src/server.js'
import { sequelize } from './bd.js'

const serverRun = async () => {
    app.listen(process.env.PORT, () => {
        console.log(`server is running successfully 🟢 on port ${process.env.PORT}`)
    })
    try{    
        await sequelize.authenticate()
        await sequelize.sync({force: false})
        console.log('Connection has ben established successfully 🟢')
    }catch(e){
        console.log('Unable to connect to database 🔴')
    }
}

serverRun()
