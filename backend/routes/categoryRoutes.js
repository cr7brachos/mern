import express from 'express';
import getCategories, { newCategory, deleteCategory, saveAttribute } from '../controllers/categoryController.js';
import verifyIsLoggedIn, { verifyIsAdmin } from '../middleware/verifyAuthToken.js';


const categoryRoutes = express.Router();

categoryRoutes.get("/", getCategories);

categoryRoutes.use(verifyIsLoggedIn); //απαιτεί ο χρήστης να έχει συνδεθεί
categoryRoutes.use(verifyIsAdmin); // απαιτεί ο χρήστης να έχει δικαιώματα admin
categoryRoutes.post("/", newCategory);
categoryRoutes.delete("/:category", deleteCategory); // /:category είναι dynamic 
categoryRoutes.post("/attr", saveAttribute);

export default categoryRoutes;
