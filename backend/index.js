import 'dotenv/config'
import app from './src/server.js'

const port = process.env.PORT || 3030


const serverRun = () => {

    app.listen(port, () => {
        console.log(`server is running successfully 🟢 on port ${port}`)
    })

}

serverRun()