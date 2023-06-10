import express from 'express';
import getUsers from '../controllers/userController.js';

const userRoutes = express.Router();

userRoutes.get("/", getUsers);


export default userRoutes;
