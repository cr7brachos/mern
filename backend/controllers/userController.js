import User from "../models/userModel.js";
import hashPassword, { comparePasswords } from "../utils/hashPasswords.js";
import generateAuthToken from "../utils/generateAuthToken.js";
import mongoose from "mongoose";
import Review from "../models/reviewModel.js";
import Product from "../models/productModel.js";




const getUsers = async (req, res, next) => {
    
    try {

        const users = await User.find({}).select();
        return res.json(users);
        
    } catch (error) {
        next(error);
    }

}

const registerUser = async (req, res, next) => {
    try {

        console.log("requested body: " + req.body);
        const { name, lastName, email, password } = req.body;

        if (!(name && lastName && email && password)) {
            return res.status(400).send("all inputs are required")
        } 
        
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({error: "user exists"});
        } else {
            const user = await User.create({
                name,
                lastName,
                email: email.toLowerCase(),
                password: hashPassword(password)
            });

            return res
                        .cookie ("access_token", generateAuthToken(user._id, user.name, user.lastName, user.email, user.isAdmin), {
                            httpOnly: true,
                            secure: process.env.NODE_ENV === "production",
                            sameSite: "strict"
                        })
                        .status(201).send(user);

        }

        
    } catch (error) {
        next(error);
    }
}

const loginUser = async (req, res, next) => {
    try {

        const { email, password, doNotLogout } = req.body;

        if (!(email && password)) {
            return res.status(400).send("all inputs are required");
        }

        const user = await User.findOne({email});
        console.log(user);
        if (user && comparePasswords(password, user.password)) { //compare passwords
            let cookieParams = { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict" }

            if (doNotLogout) {
                cookieParams = { ...cookieParams, maxAge: 1000*60*60*24*7 } //εάν κλείσω το browser τότε για 7 ημέρες μπορώ να ξαναμπώ χωρίς να χρειάζεται να ξαναδώσω στοιχεία
            }
    
            return res.cookie(
                "access_token", 
                generateAuthToken(user._id, user.name, user.lastName, user.email, user.isAdmin), 
                cookieParams
                ).json({
                    success: "user logged in",
                    userLoggedIn: {_id: user._id, name: user.name, lastName: user.lastName, email: user.email, isAdmin: user.isAdmin, doNotLogout }
                })


        } else {
            return res.status(401).send("wrong credentials")
        }

        

    } catch (error) {
        next(error);
    }
}

const updateUserProfile = async (req, res, next) => {
    try {

        //req.user ορίζεται από το verifyAuthToken στη γραμμή 16
        const user = await User.findById(req.user._id).orFail(); //βρίσκω το χρήστη με βάση το id
        console.log(user.name);

        user.name = req.body.name || user.name;
        user.lastName = req.body.lastName || user.lastName;
        user.email = req.body.email || user.email;
        user.phoneNumber = req.body.phoneNumber;
        user.address = req.body.address;
        user.country = req.body.country;
        user.zipCode = req.body.zipCode;
        user.city = req.body.city;
        user.state = req.body.state;

        if (req.body.password !== user.password) {
            user.password = hashPassword(req.body.password);
        }
        await user.save();

        res.json({
            success: "user succesfully updated",
            userUpdated: {
                _id: user._id,
                name: user.name,
                lastName: user.lastName,
                email: user.email,
                isAdmin: user.isAdmin
            }
        })
        
    } catch (error) {
        next(error);
    }
};

const getUserProfile = async (req, res, next) => {
    try {
        
        const user = await User.findById(req.params.id).orFail();
        return res.send(user);

    } catch (error) {
        next(error);
    }
}

const writeReview = async (req, res, next) => {
    try {

        const session = await Review.startSession(); //σρχή του session

        //get comment and rating from request body

        const { comment, rating } = req.body; //destructuring

        //validate request
        if (!(comment && rating)) {
            return res.status(400).send("all inputs are required");
        }

        //create review id manually because it is needed also for saving in Product collection
        let reviewId = new mongoose.Types.ObjectId(); //creates random id

        session.startTransaction(); //πριν την πρώτη ενέργεια στη βάση

        await Review.create([
            {
                _id: reviewId,
                comment: comment,
                rating: Number(rating), //cast text to Number
                user: {
                    _id: req.user._id,
                    name: req.user.name + " " + req.user.lastName,
                },
            }
        ], {session: session}); //βάζουμε το session ως παράμετρο, κι έτσι το Review.create, είναι μέρος του transaction
        
        const product = await Product.findById(req.params.productId).populate("reviews").session(session); //το ίδιο με πιο πάνω
        //res.send(product);

        const alreadyReviewed = product.reviews.find((r) => r.user._id.toString() === req.user._id.toString());
        if(alreadyReviewed) {
            await session.abortTransaction();
            session.endSession();
            return res.status(400).send("product already reviewed"); 
        }

        let prc = [...product.reviews];
        prc.push({ rating: rating });
        product.reviews.push(reviewId);

        if (product.reviews.length === 1) {
            product.rating = Number(rating);
            product.reviewsNumber = 1;
        } else {
            product.reviewsNumber = product.reviews.length;
            //το map παράγει νέο πίνακα με μόνο τις τιμές από το item.rating
            //κατόπιν το reduce ξεκινάει με sum=0 και κάνει τις πράξεις
            product.rating = prc.map((item)=> Number(item.rating))
                                .reduce((sum, item) => sum + item, 0) / product.reviews.length;

        }

        await product.save();
        await session.commitTransaction(); //εάν όλα έχουν πάει καλά
        session.endSession();
        res.send("review created");

    } catch (error) {
        await session.abortTransaction();
        next(error);
    }
}


const getUser = async (req, res, next) => {
    try {
        //με τη select διαλέγουμε ποια πεδία θέλουμε να βλέπουμε
        const user = await User.findById(req.params.id).select("name lastName email isAdmin").orFail();
        return res.send(user);
        
    } catch (error) {
        next(error);
    }
}

const updateUser = async (req, res, next) => {
    try {
        
        const user = await User.findById(req.params.id).orFail();

        user.name = req.body.name || user.name;
        user.lastName = req.body.lastName || user.lastName;
        user.email = req.body.email || user.email;
        user.isAdmin = req.body.isAdmin || user.isAdmin; 
        
        await user.save();
        res.json({
            message: "user updated",
            user: user
        });

    } catch (error) {
        next(error);
    }
}

const deleteUser = async (req, res, next) => {

    try {
        
        await User.findByIdAndRemove(req.params.id).orFail();

        // await user.remove();
        res.json({message:"user removed"});

    } catch (error) {
        next(error);
    }

}

export default getUsers;

export { registerUser, 
        loginUser, 
        updateUserProfile, 
        getUserProfile, 
        writeReview, 
        getUser, 
        updateUser,
        deleteUser };