import express from 'express';
import router from "./productRoutes.js";


const apiRoutes = express();

apiRoutes.use("/products", router);

export default apiRoutes;


