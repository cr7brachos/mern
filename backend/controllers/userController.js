import User from "../models/userModel.js";
import hashPassword from "../utils/hashPasswords.js";



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
                email: hashPassword(email.toLowerCase()),
                password
            });

            return res.status(201).send(user);

        }

        
    } catch (error) {
        next(error);
    }
}

export default getUsers;

export { registerUser };