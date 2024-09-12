import express from 'express';
import { signin, signup } from '../controllers/auth.controller.js';

const userRouter = express.Router();

userRouter.post('/signup',signup);

export default userRouter;