import 'dotenv/config'
import app from './src/server.js'
import { connectDb } from './bd.js'
import { sequelize } from './bd.js'

async function initdb() {
    connectDb()
    await sequelize.sync()
}

await initdb()

const serverRun = () => {

    app.listen(process.env.PORT, () => {
        console.log(`server is running successfully 🟢 on port ${process.env.PORT}`)
    })

}

serverRun()
