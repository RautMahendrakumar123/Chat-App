import  express  from 'express';
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import connectDB from './db/connectDB.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use('/api/auth',authRoutes)


app.listen(PORT,()=>{
    connectDB()
    console.log(`server running on PORT ${PORT}`);
})