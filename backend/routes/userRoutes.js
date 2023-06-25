import express from 'express';
import getUsers, { registerUser, 
                    loginUser, 
                    updateUserProfile, 
                    getUserProfile,
                    writeReview,
                    getUser, 
                    updateUser,
                    deleteUser } from '../controllers/userController.js';
import verifyIsLoggedIn, { verifyIsAdmin } from '../middleware/verifyAuthToken.js';

const userRoutes = express.Router();


userRoutes.post("/register", registerUser);
userRoutes.post("/login", loginUser)


//user logged in routes
userRoutes.use(verifyIsLoggedIn);
userRoutes.put("/profile", updateUserProfile); //put request χρησιμοποιείται για update στη βάση
userRoutes.get("/profile/:id", getUserProfile);
userRoutes.post("/review/:productId", writeReview);


//admin routes
userRoutes.use(verifyIsAdmin);
userRoutes.get("/", getUsers);
userRoutes.get("/:id", getUser);
userRoutes.put("/:id", updateUser);
userRoutes.delete("/:id", deleteUser);

export default userRoutes;
