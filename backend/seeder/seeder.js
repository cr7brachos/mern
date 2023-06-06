import connectDB from "../config/db.js";
import categories from "./categories.js";
import Category from "../models/categoryModel.js";


connectDB();

const importData = async () => {
    try {
        await Category.collection.deleteMany({});
        await Category.insertMany(categories);
        console.log("Seeder data proceeded succesfuly");
        process.exit();
    } catch (error) {
        console.log(error, "something went wrong");
        process.exit(1);
    }
}

importData();