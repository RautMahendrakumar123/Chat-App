import  express  from 'express';
const app = express();
import dotenv from 'dotenv'
dotenv.config();
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js'
import connectDB from './db/connectDB.js';

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/users',userRoutes);


app.listen(PORT,()=>{
    connectDB()
    console.log(`server running on PORT ${PORT}`);
});