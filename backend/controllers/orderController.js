import Order from "../models/orderModel.js";
import { ObjectId } from 'mongodb';
import Product from "../models/productModel.js";


const getUserOrders = async (req, res,next) => {
    
    try {

        const order = await Order.find({user: new ObjectId(req.user._id)});
        res.send(order);
        
    } catch (error) {
        next(error);
    }
    
}

const getOrder = async (req, res, next) => {
    try {

        const order = await Order.findById(req.params.id)
                                 .populate("user", "-password -isAdmin -_id -__v -createdAt -updatedAt").orFail();
        res.send(order);
    } catch (error) {
        next(error);
    }
}

const createOrder = async (req, res, next) => {
    try {

        const { cartItems, orderTotal, paymentMethod } = req.body;

        if (!cartItems || !orderTotal || !paymentMethod) {
            res.status(400).send("all inputs are required");
        }

        // επιστρέφει πίνακα με το productID της παραγγελίας
        let ids = cartItems.map((item) => {
            return item.productID;
        });

        // επιστρέφει πίνακα με το quantity της παραγγελίας
        let qty = cartItems.map((item) => {
            return Number(item.quantity);
        });

        await Product.find({ _id: { $in: ids } }).then((products)=>{
            products.forEach((product, idx) => {
                product.sales += qty[idx];
                product.save();
            });
        })

        const order = new Order({
            user: new ObjectId(req.user._id),
            orderTotal: orderTotal,
            cartItems: cartItems,
            paymentMethod: paymentMethod
        });

        const createdOrder = await order.save();
        res.status(201).send(createdOrder);
        
    } catch (error) {
       next(error) 
    }
}

const updateOrderToBePaid = async (req, res, next) => {
    try {

        const order = await Order.findById(req.params.id).orFail();
        order.isPaid = true;
        order.paidAt = Date.now();

        const updatedOrder = await order.save();
        res.send(updatedOrder);

        
    } catch (error) {
        next(error);
    }
}

const updateOrderToBeDelivered = async (req, res, next) => {
    try {

        const order = await Order.findById(req.params.id).orFail();
        order.isDelivered = true;
        order.deliveredAt = Date.now();

        const orderUpdated = await order.save();
        res.send(orderUpdated);


        
    } catch (error) {
        next(error);
    }
}

const getOrders = async (req, res, next) => {
    try {

        const orders = await Order.find({})
                                    .populate("user", "-password")
                                    .sort({ paymentMethod:"desc" })
                                    .orFail();
        res.send(orders);
        
    } catch (error) {
        next(error);
    }
}

const getOrderForAnalysis = async (req, res, next) => {
    try {

        console.log(req.params.date);
        const start = new Date(req.params.date); // ξεκινάμε από την αρχή της ημέρας
        
        start.setHours(0, 0, 0, 0);

        const end = new Date(req.params.date); //μέχρι το τέλος της ίδιας ημέρας
        end.setHours(23, 59, 59, 999);
        console.log(start, end);
        

        const order = await Order.find({
            createdAt: {
                $gte: start,
                $lte: end
            }
        }).sort({createdAt: "asc"}).orFail();

        res.send(order);
        
    } catch (error) {
        next(error);
    }
}

export default getUserOrders;

export { getOrder, 
        createOrder, 
        updateOrderToBePaid, 
        updateOrderToBeDelivered, 
        getOrders, 
        getOrderForAnalysis };