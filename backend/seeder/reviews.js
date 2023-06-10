
import mongoose from "mongoose";


// const ObjectId = require("mongodb").ObjectId;



const reviews = [
    {
        comment: "this is a very nice project",
        rating: 5,
        user: {
            _id: new mongoose.Types.ObjectId(), 
            name: "John Doe"
        }
    },
    {
        comment: "this is a medium product",
        rating: 3,
        user: {
            _id: new mongoose.Types.ObjectId(), 
            name: "John Doe"
        }
    },
    {
        comment: "this is a shitty nice project",
        rating: 1,
        user: {
            _id: new mongoose.Types.ObjectId(), 
            name: "Vassilis Brachos"
        }
    }

];

export default reviews;