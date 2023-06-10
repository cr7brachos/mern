import express from 'express';
import getCategories, { newCategory, deleteCategory, saveAttribute } from '../controllers/categoryController.js';


const categoryRoutes = express.Router();

categoryRoutes.get("/", getCategories);
categoryRoutes.post("/", newCategory);
categoryRoutes.delete("/:category", deleteCategory); // /:category είναι dynamic 
categoryRoutes.post("/attr", saveAttribute);

export default categoryRoutes;
