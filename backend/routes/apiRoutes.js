import express from 'express';
import productRoutes from "./productRoutes.js";
import categoryRoutes from './categoryRoutes.js';
import userRoutes from './userRoutes.js';
import orderRoutes from './orderRoutes.js';



const apiRoutes = express();

apiRoutes.use("/products", productRoutes);
apiRoutes.use("/categories", categoryRoutes);
apiRoutes.use("/users", userRoutes);
apiRoutes.use("/orders", orderRoutes);

export default apiRoutes;


