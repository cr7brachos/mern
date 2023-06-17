import express from 'express';
import getUsers, { registerUser } from '../controllers/userController.js';

const userRoutes = express.Router();

userRoutes.get("/", getUsers);
userRoutes.post("/register", registerUser);


export default userRoutes;
