import express from 'express';
import morgan from 'morgan';
import cookieParser from "cookie-parser";
import cors from 'cors';

import userRouter from './router/user.routes.js';
import publicationsRouter from './router/publication.routes.js';

const app = express();


app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
}))

app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

//userApi
app.use('/api', userRouter)

//publicationsApi
app.use('/api', publicationsRouter)

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send({
        'node-version': process.version,
        cpu: process.cpuUsage(),
        memory: process.memoryUsage(),
        pid: process.pid,
        uptime: process.uptime(),
    });
})


export default app