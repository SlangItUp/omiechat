import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';

import { app, server} from './socket/socket.js'
dotenv.config();

import authRouter from './router/authRouter.js';
import messagesRouter from './router/messagesRouter.js';
import usersRouter from './router/usersRouter.js';
import cookieParser from 'cookie-parser';

const PORT = process.env.PORT || 9090; 
const __dirname = path.resolve()

app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRouter);
app.use('/api/message', messagesRouter);
app.use('/api/users', usersRouter);

app.use(express.static(path.join(__dirname, "/client/dist")))
app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})
server.listen(PORT, async()=>{
   console.log("Server has been started on port : ", PORT); 
    try{
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Database connection succesful")
    }
    catch(error){
        console.log("Database connection failed with error : ", error)
    }
})