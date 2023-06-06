import Product from "../models/productModel.js";


const getProducts = async (req, res) => {
    try {
        const product = new Product;
        product.name = "HP";
        product.description = "this is a test product";
        product.category = "TV";
        product.count = 1;
        product.price = 350;
        
        await product.save();
        console.log("product saved succesfully");
        
    } catch (error) {
        res.send(error);
    }
    res.send("Handling product routes, e.g. search for products, test with product controller")
}

export default getProducts;