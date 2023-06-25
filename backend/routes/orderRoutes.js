import express from 'express';
import getUserOrders, { getOrder, 
                        createOrder, 
                        updateOrderToBePaid, 
                        updateOrderToBeDelivered,
                        getOrders,
                        getOrderForAnalysis } from '../controllers/orderController.js';
import verifyIsLoggedIn, { verifyIsAdmin } from '../middleware/verifyAuthToken.js';

const orderRoutes = express.Router();


//user routes
orderRoutes.use(verifyIsLoggedIn);
orderRoutes.get("/", getUserOrders);
orderRoutes.get("/users/:id", getOrder);
orderRoutes.post("/", createOrder);
orderRoutes.put("/paid/:id", updateOrderToBePaid);



//admin routes
orderRoutes.use(verifyIsAdmin);
orderRoutes.put("/delivered/:id", updateOrderToBeDelivered);
orderRoutes.get("/admin", getOrders);
orderRoutes.get("/analysis/:date", getOrderForAnalysis)


export default orderRoutes;
