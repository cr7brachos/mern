import mongoose from "mongoose";
import Review from "./reviewModel.js";
import Image from "./imageModel.js";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        
    }, 
    category: {
        type: String,
        required: true,
        
    }, 
    count: {
        type: Number,
        required: true,
        
    }, 
    price: {
        type: Number,
        required: true,
        
    }, 
    rating: {
        type: Number,
        
        
    }, 
    reviewsNumber: {
        type: Number,
        
        
    }, 
    sales: {
        type: Number,
        default: 0,
        
    }, 
    attributes: [
        {
            key: {type: String,}, 
            value: {type: String},
        }
    ],
    images: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: Image
        }
    ],
    reviews: [
        {   type: mongoose.Schema.Types.ObjectId,
            ref: Review,
        }
    ],


}, {
    timestamps: true, //προσθέτει στο αντικείμενο της βάσης ιδιότητες όπως το πότε δημιουργήθηκε ή ανανεώθηκε
});

productSchema.index({name: "text", description:"text"}, {name: "TextIndex"}); // όλα τα πεδία που είναι searchable
productSchema.index({"attributes.key":1, "attributes.value":-1}) //1 means A-Z, -1 means Z-A

const Product = mongoose.model("Product", productSchema);

export default Product;