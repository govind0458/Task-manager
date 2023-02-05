import express from 'express'
import 'dotenv/config'
import { configureDb } from './src/config/config.js';
import TaskRouter from './src/router/TaskRouter.js';
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json())
app.use(TaskRouter);
configureDb()

app.listen(process.env.SERVER_PORT, ()=>{
    console.log(`server listening on ${process.env.SERVER_PORT}`);
})