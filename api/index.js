import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './route/User.rout.js';
import authRouter from './route/auth.rout.js';
dotenv.config();


mongoose.connect(process.env.MONGO ).then(()=>{
     console.log('connected to MongoDB')
}).catch((err)=>{
     console.log(err);0
})
const app = express();
app.use(express.json());

app.listen(3000 , ()=>{
     console.log("server is runnign on port 3000");
}
);

app.use('/api/user' , userRouter)
app.use('/api/auth' , authRouter)