import mongoose, { mongo } from "mongoose";
import User from "./userModel.js";

const orderSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: User // one to many concept, a order can have many orders
    },
    orderTotal: {
        itemsCount: {type: Number, required: true},
        cardSubTotal:{type: Number, required: true},
        cartItems: [
            {
                name: {type: String, required: true},
                price: {type: Number, required: true},
                image: {
                    path: {type: String, required: true}
                },
                quantity: {type: Number, required: true},
                count: {type: Number, required: true},
            }
        ],
    transactionResults: {
        status: {type: String},
        amount: {type: Number},
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false
    },
    paidAt: {type: Date},
    isDelivered: {type: Boolean, required: true, default: false}
    },
    delivereAt: {type: Date}
}, {timestamps: true});

const Order = mongoose.model("Order", orderSchema);

export default Order;