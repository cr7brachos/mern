import express from 'express';
import getProducts, {getProductById, 
                    getBestsellers, 
                    adminGetProducts, 
                    adminDeleteProduct,
                    adminCreateProduct} from '../controllers/productController.js';

const productRoutes = express.Router();

productRoutes.get("/", getProducts);
productRoutes.get("/category/:categoryName", getProducts);
productRoutes.get("/category/:categoryName/search/:searchQuery"), getProducts;
productRoutes.get("/search/:searchQuery", getProducts);
productRoutes.get("/bestsellers", getBestsellers);
productRoutes.get("/get-one/:id", getProductById);

//admin
productRoutes.get("/admin", adminGetProducts);
productRoutes.delete("/admin/:id", adminDeleteProduct);
productRoutes.post("/admin", adminCreateProduct);


export default productRoutes;
