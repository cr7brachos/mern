// import connectDB from "../config/db.js";
import categories from "./categories.js";
import Category from "../models/categoryModel.js";
import products from "./products.js";
import Product from "../models/productModel.js";
import Review from "../models/reviewModel.js";
import reviews from "./reviews.js";
import users from "./user.js";
import User from "../models/userModel.js";
import orders from "./orders.js";
import Order from "../models/orderModel.js";


import mongoose from "mongoose";


const connectDB = async ()=> {
    try {

        await mongoose.connect("mongodb+srv://cr7brachos:crbr2610@cluster0.f9sdnge.mongodb.net/mern_database?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("connection successful");
        
    } catch (error) {
        console.log(error);
        process.exit(1); //exits the node with the indication a problem has been occured
    }
}

const importData = async () => {
    try {
        await Category.collection.dropIndexes();
        await Product.collection.dropIndexes();
        await Review.collection.dropIndexes();
        await User.collection.dropIndexes();
        await Order.collection.dropIndexes();

        await Category.collection.deleteMany({});
        await Product.collection.deleteMany({});
        await Review.collection.deleteMany({});
        await User.collection.deleteMany({});
        await Order.collection.deleteMany({});

        await Category.insertMany(categories);
        await User.insertMany(users);
        await Order.insertMany(orders);
        
        const reviewRef = await Review.insertMany(reviews);
        const sampleProducts = products.map((product)=>{
            reviewRef.map((item)=> {
                product.reviews.push(item._id)
            })
            return {...product}
        });

        

        await Product.insertMany(sampleProducts);
        

        console.log("Seeder data proceeded succesfuly");
        process.exit();
    } catch (error) {
        console.log(error, "something went wrong");
        process.exit(1);
    }
}

connectDB();

importData();