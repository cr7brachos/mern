import express from 'express';
import getCategories from '../controllers/categoryController.js';

const categoryRoutes = express.Router();

categoryRoutes.get("/", getCategories);


export default categoryRoutes;
