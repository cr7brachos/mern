import express from 'express';
import getProducts, {getProductById, 
                    getBestsellers, 
                    adminGetProducts, 
                    adminDeleteProduct,
                    adminCreateProduct,
                    adminUpdateProduct, 
                    adminUpload,
                    adminDeleteProductImage} from '../controllers/productController.js';

const productRoutes = express.Router();

productRoutes.get("/", getProducts);
productRoutes.get("/category/:categoryName", getProducts);
productRoutes.get("/category/:categoryName/search/:searchQuery"), getProducts;
productRoutes.get("/search/:searchQuery", getProducts);
productRoutes.get("/bestsellers", getBestsellers);
productRoutes.get("/get-one/:id", getProductById);

//admin
productRoutes.get("/admin", adminGetProducts);
productRoutes.post("/admin", adminCreateProduct);
productRoutes.delete("/admin/:id", adminDeleteProduct);
productRoutes.delete("admin/image/:imagePath/:productId", adminDeleteProductImage)
productRoutes.put("/admin/:id", adminUpdateProduct);
productRoutes.post("/admin/upload", adminUpload)



export default productRoutes;
