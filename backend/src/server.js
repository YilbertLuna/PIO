import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'))
app.use(express.json())

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