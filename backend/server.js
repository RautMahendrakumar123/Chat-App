import path from 'path'
import  express  from 'express';

import dotenv from 'dotenv'
dotenv.config();
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js'
import connectDB from './db/connectDB.js';
import { app, server } from './socket/socket.js';


const PORT = process.env.PORT || 5000;

const __direname = path.resolve();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/users',userRoutes);

app.use(express.static(path.join(__direname,"/frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__direname,"frontend","dist","index.html"))
})


server.listen(PORT,()=>{
    connectDB()
    console.log(`server running on PORT ${PORT}`);
});