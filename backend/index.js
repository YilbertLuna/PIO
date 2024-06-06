import 'dotenv/config'
import app from './src/server.js'
import { sequelize } from './bd.js'

import './src/models/user.js'
import './src/models/ publications.js'

const serverRun = async () => {
    app.listen(process.env.PORT, () => {
        console.log(`server is running successfully 🟢 on port ${process.env.PORT}`)
    })
    try{    
        await sequelize.authenticate()
        await sequelize.sync({force: true})
        console.log('Connection has ben established successfully 🟢')
    }catch(e){
        console.log('Unable to connect to database 🔴')
    }
}

serverRun()
