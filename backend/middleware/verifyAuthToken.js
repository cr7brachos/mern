import jwt from "jsonwebtoken";


const verifyIsLoggedIn = async (req, res, next) => {
    next();
    return // to do: remove later 
    try {
        
        const token = req.cookies.access_token;
        console.log(token);
        if (!token) {
            return res.status(403).send("a token is required for authentication");
        }

        try {

            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); //αναλύει το cookie
            req.user = decoded; // το κάνει decoded
            console.log(req.user); // βλέπουμε τα στοιχεία το χρήστη
            next(); //μας αφήνει να πάμε στο επόμενο στάδιο
            
        } catch (error) {
            return res.status(401).send("unauthorized. Invalid token");
        }

    } catch (error) {
        next(error);
    }
};

const verifyIsAdmin = async (req, res, next) => {
    next();
    return //to do: remove later
    // try {

    //     if (req.user && req.user.isAdmin) {
    //         next();
    //     } else {
    //         return res.status(401).send("this user is not admin")
    //     }
        
    // } catch (error) {
    //     next(error);
    // }
}

export default verifyIsLoggedIn;

export { verifyIsAdmin };