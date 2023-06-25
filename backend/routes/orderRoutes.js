import express from 'express';
import getUserOrders, { getOrder } from '../controllers/orderController.js';
import verifyIsLoggedIn, { verifyIsAdmin } from '../middleware/verifyAuthToken.js';

const orderRoutes = express.Router();


//user routes
orderRoutes.use(verifyIsLoggedIn);
orderRoutes.get("/", getUserOrders);
orderRoutes.get("/users/:id", getOrder);


//admin routes
orderRoutes.use(verifyIsAdmin);


export default orderRoutes;
