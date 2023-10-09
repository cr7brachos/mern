import express from 'express';
import productRoutes from "./productRoutes.js";
import categoryRoutes from './categoryRoutes.js';
import userRoutes from './userRoutes.js';
import orderRoutes from './orderRoutes.js';
import { Jwt, decode } from 'jsonwebtoken';

const apiRoutes = express();

apiRoutes.get("/get-token", (req, res) => {
    try {
        const accessToken = req.cookies["access_token"];
        const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
        return res.json({
            token: decoded.name,
            isAdmin: decoded.isAdmin,

        })
    } catch (error) {
        return res.status(401).send("Unauthorized. Invalid token");
    }
})

apiRoutes.use("/products", productRoutes);
apiRoutes.use("/categories", categoryRoutes);
apiRoutes.use("/users", userRoutes);
apiRoutes.use("/orders", orderRoutes);

export default apiRoutes;


