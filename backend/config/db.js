import dotenv from "dotenv"; //για να διαβάσουμε το env file
import mongoose from "mongoose";

dotenv.config(); //configuration του env file


//συνάρτηση για τη σύνδεση στη βάση, με βάση το user name και το password
const connectDB = async ()=> {
    try {

        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("connection successful");
        
    } catch (error) {
        console.log(error);
        process.exit(1); //exits the node with the indication a problem has been occured
    }
}

export default connectDB;