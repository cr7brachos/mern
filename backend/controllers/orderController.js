import Order from "../models/orderModel.js";
import { ObjectId } from 'mongodb';


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

export default getUserOrders;

export { getOrder };