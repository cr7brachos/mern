import User from "../models/userModel.js";
import hashPassword, { comparePasswords } from "../utils/hashPasswords.js";
import generateAuthToken from "../utils/generateAuthToken.js";



const getUsers = async (req, res, next) => {
    
    try {

        const users = await User.find({}).select("-password");
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


export default getUsers;

export { registerUser, loginUser };