import recordsPerPage from "../config/pagination.js";
import Product from "../models/productModel.js";
import imageValidate from "../utils/imageValidate.js";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";


const getProducts = async (req, res, next) => {
    
    try {

        // sorting section
        let query = {};
        let priceQueryCondition = {};
        let ratingQueryCondition = {};
        let queryCondition = false;
        

        if (req.query.price) {
            queryCondition = true;
            priceQueryCondition = { price: {$lte: Number(req.query.price)} } //$lte: ζητά να επιστραφούν από τη βάση όλα τα documnets, less than or equal to value
        } else {
            console.log("there is no price");
        }

        if (req.query.rating) {
            queryCondition = true;
            
            
            ratingQueryCondition = { rating: { $in: req.query.rating.split(",") } } //$in: ζητά να επιστραφούν από τη βάση όλα τα documnets, που include καποια από την τιμή του πίνακα

        }

        // select specific category
        let categoryQueryCondition = {};
        const categoryName = req.params.categoryName || "";
        if (categoryName) {
           
            queryCondition = true;
            let a = categoryName.replaceAll("," , "/"); // το φτιάχνει με /
           
            var regEx = new RegExp("^" + a); //προσθέτει / στην αρχη
            
            categoryQueryCondition = { category: regEx}; //φτιάχνει το ερώτημα
            
        }

        if (req.query.category) {
            queryCondition = true;
            let a = req.query.category.split(",").map((item)=>{
                if (item) return new RegExp("^" + item);
            })
            
            categoryQueryCondition = {
                category: {$in : a}
            }
        };


        //filter by attributes
        let attributesQueryCondition = [];
        if (req.query.attributes) {
            // attributes = RAM-1TB-2TB-4TB, color-blue-red
            // ["RAM-1TB-2TB-4TB", "color-blue-red"]
            attributesQueryCondition = req.query.attributes.split(",").reduce((acc, item)=>{
                if (item) {
                    let a = item.split("-");
                    let values = [...a];
                    values.shift();
                    let a1 = {
                        attributes: {
                            $elemMatch: {key: a[0], value: {$in: values}}
                        }
                    }
                    acc.push(a1);
                    
                    return acc;
                } else {
                    return acc;
                }
            }, [])
            // console.dir(attributesQueryCondition, {depth: null});
            queryCondition = true;
        }

        //sort by name, price, etc
        let sort = {};
        const sortOption = req.query.sort || "";
        if (sortOption) {
            let sortOpt = sortOption.split("_"); //η επιλογή θα είναι π.χ. price_-1, τότε δημιουργούμε πίνακα με ["price", "-1"]
            // κατόπιν δημιουργούμε το αντικείμενο sort, με τιμές: price: -1
            // επειδή το πεδίο sortOpt το θέλουμε δυναμικό τότε πρέπει να μπεί μέσα σε []
            sort = { [sortOpt[0]]: Number(sortOpt[1]) }
        }

        //search by category or search field 
        const searchQuery = req.params.searchQuery || "";
        let searchQueryCondition = {};
        let select = {};
        if (searchQuery) {
            queryCondition = true;
            searchQueryCondition = { $text: {$search: searchQuery}} //ψαχνει στα πεδία που έχουν δηλωθεί searchable μεσα στο productModel
            select = {
                score: { $meta: "textScore" } //προσθέτει επιπλέον πεδίο που δείχνει πόσο καλή ήταν η αναζήτησ
            }
            sort = { score: {$meta: "textScore"} };
        }



        if (queryCondition) {
            query = { $and: [
                priceQueryCondition, 
                ratingQueryCondition, 
                categoryQueryCondition,
                ...attributesQueryCondition,
                searchQueryCondition
            ] }; //and των δύο ερωτημάτων
        }
        




        //pagination section
        //  διαβάζει από το req.body το query, στη παράμετρο pageNum
        // εάν δεν υπάρχει pageNum τότε δίνει την τιμή 1
        const pageNum = Number(req.query.pageNum) || 1;
        // res.json({pageNum});
        
        

        
        
        //επιστρέφει το συνολικό αριθμό των εγγραφών στη βάση για το collection Product
        const totalProducts = await Product.countDocuments(query);
        // βρίσκει τα προϊόντα στο Product, τα ταξιμονεί, κάνει skip και κατόπιν limit
        const products = await Product.find(query).sort(sort).skip(recordsPerPage * (pageNum-1)).limit(recordsPerPage).select(select);
        res.json({
            products,
            pageNum,
            paginationLinksNumber: Math.ceil(totalProducts/recordsPerPage),
           
        });
        
    } catch (error) {
        next(error);
    }

}

const getProductById = async (req, res, next) => {
    try {
        

        //const product = await Product.findOne({_id: req.params.id}).populate("reviews").orFail();
        const product = await Product.findById(req.params.id).populate("reviews").orFail();
        res.json(product)
        
    } catch (error) {

        next(error);

    }
}

const getBestsellers = async (req, res, next) => {
    try {
        
        const products = await Product.aggregate([
            { $limit: 3 }, //  συνολικά 3 προϊόντα
            { $sort: { category: -1, sales: -1 } }, //ταξινόμηση 
            { $group: { _id: "$category", max_sales: { $first: "$$ROOT" }} }, //το πρώτο από κάθε κατηγορία
            { $replaceWith: "$max_sales" }, //να φάινεται σωστά
            { $project: { _id:1, name:1, images:1, category:1, description:1, sales:1 } }, //ποια πεδία θέλουμε να φαίνονται
            {$match: {sales: {$gt: 0}}} //αυτά που είναι πάνω από 0
            
        ])
        res.json(products);

    } catch (error) {

        next(error);

    }
}

const adminGetProducts = async (req, res, next) => {
    try {
        
        const products = await Product.find({}).sort({category: 1}).select("name price category");
        res.json(products);

    } catch (error) {
        
        next(error);

    }
}

const adminDeleteProduct = async (req, res, next) => {
    try {

        const product = await Product.deleteOne({_id: req.params.id}).orFail();
        
        res.send("product removed")
        
    } catch (error) {
        
        next(error);

    }
}

const adminCreateProduct = async (req, res, next) => {
    try {

        const product = new Product();
        const {name, description, count, price, category, attributesTable} = req.body;

        console.log(name, description, count, price, category);

        product.name = name;
        product.description = description;
        product.count = count;
        product.price = price;
        product.category = category;
        console.log(attributesTable);
            if (attributesTable.length > 0){
                attributesTable.map((item)=>{
                    product.attributes.push(item)
                })
            }
        await product.save();
        res.json("product created");
        
    } catch (error) {
        
        next(error);

    }
}

const adminUpdateProduct = async (req, res, next) => {
    try {

        const product = await Product.findById(req.params.id).orFail();

        const { name, description, count, price, category, attributesTable } = req.body;

        product.name = name || product.name;
        product.description = description || product.description;
        product.count = count || product.count;
        product.price = price || product.price;
        product.category = category || product.category;
        if (attributesTable > 0) {
            product.attributes = [];
            attributesTable.map((item) => {
                product.attributes.push(item);
            })
        } else {
            product.attributes = [];
        }

        await product.save();
        res.json({
            message: "product updated"
        })
        
    } catch (error) {
        
        next(error);

    }
};

const adminUpload = async (req, res, next) => {
    try {
        
        if (!req.files || !!req.files.images === false) {
            return res.status(400).send("no files were uploaded");
        }

        //τσεκάρει εάν είναι όλα σύμφωνα με το image validation
        const validateResults = imageValidate(req.files.images);
        if (validateResults.error) {
            return res.status(400).send(validateResults.error);
        };

        //φτιάχνει το upload directory
        const uploadDirectory = path.resolve(__dirname, "../../frontend", "public", "images", "products");

        let product = await Product.findById(req.query.productId).orFail(); //βρίσκουμε προϊόν με βάση το id

        let imagesTable = [];
        if (Array.isArray(req.files.images)) { //εάν έχουμε ανεβάσει περισσότερες από μια φωτογραφίες τότε έχουμε πίνακα με φωτογραφίες
            imagesTable = req.files.images;
        } else {
            imagesTable.push(req.files.images);
        }

        //για τη κάθε εικόνα τη κάνει move στο uploadDirectory + τυχαίο όνομα + το extension του αρχικού αρχείου
        imagesTable.forEach(image => {

            var fileName = uuidv4() + path.extname(image.name);
            var uploadPath = uploadDirectory + "/" + fileName;
            product.images.push({ path: "/images/products" + fileName });
            image.mv(uploadPath, function(err){
                if (err) {
                    return res.status(500).send(err);
                }
            })

        });

        await product.save();
        return res.send("Files uploaded");

    } catch (error) {
        
        next(error)

    }
};

const adminDeleteProductImage = async (req, res, next) => {

    try {

        const imagePath = decodeURIComponent(req.params.imagePath);
        const finalPath = path.resolve("../frontend/public") + imagePath;

        //διαγράφει το αρχείο που βρίσκεται στο finalPath
        fs.unlink(finalPath, (err)=>{
            if (err) {
                res.status(500).send(err);
            }
        });

        //βρίσκει προϊόν και κατόπιν από το προϊόν πετάει έξω το path που έχουμε δώσει
        await Product.findOneAndUpdate({ _id: req.params.productId }, { $pull: {images: {path: imagePath}} }).orFail();

        return res.end();
        
    } catch (error) {
        next(error)
    }

    
}


export default getProducts;

export {    getProductById, 
            getBestsellers, 
            adminGetProducts, 
            adminDeleteProduct, 
            adminCreateProduct, 
            adminUpdateProduct, 
            adminUpload,
            adminDeleteProductImage
        };