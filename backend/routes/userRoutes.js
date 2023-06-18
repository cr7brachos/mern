import express from 'express';
import getUsers, { registerUser, loginUser} from '../controllers/userController.js';

const userRoutes = express.Router();


userRoutes.post("/register", registerUser);
userRoutes.post("/login", loginUser)


//user logged in routes


//admin routes
userRoutes.get("/", getUsers);

export default userRoutes;
