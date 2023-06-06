import express from "express";
import bodyParser from "body-parser";
import apiRoutes from "./routes/apiRoutes.js";
import connectDB from "./config/db.js";
import Product from "./models/productModel.js";


const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", (req, res, next)=>{
    res.json({message: "API is running"});
})

connectDB();


/* όταν το URL είναι /api, τότε καλεί το αρχείο apiRoutes
στο αρχείο apiRoutes με τον ίδιο τρόπο όταν βλέπει /products τότε παίρνει τα στοιχεία από το productRoutes
*/
app.use("/api", apiRoutes);



app.use((error, req, res, next) => {
    console.log(error);
    next(error);
})

app.use((error, req, res, next)=>{
    res.status(500).json({
        message: error.message,
        stack: error.stack
    })
})



app.listen("5000", ()=>{
    console.log("server is running at port 5000")
})

