import 'dotenv/config'
import app from './src/server.js'

const serverRun = () => {

    app.listen(process.env.PORT, () => {
        console.log(`server is running successfully 🟢 on port ${process.env.PORT}`)
    })

}

serverRun()