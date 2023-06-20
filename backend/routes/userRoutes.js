import express from 'express';
import getUsers, { registerUser, loginUser, updateUserProfile, getUserProfile} from '../controllers/userController.js';
import verifyIsLoggedIn, { verifyIsAdmin } from '../middleware/verifyAuthToken.js';

const userRoutes = express.Router();


userRoutes.post("/register", registerUser);
userRoutes.post("/login", loginUser)


//user logged in routes
userRoutes.use(verifyIsLoggedIn);
userRoutes.put("/profile", updateUserProfile); //put request χρησιμοποιείται για update στη βάση
userRoutes.get("/profile/:id", getUserProfile)


//admin routes
userRoutes.use(verifyIsAdmin);
userRoutes.get("/", getUsers);

export default userRoutes;
