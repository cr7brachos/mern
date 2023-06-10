
import bcrypt from "bcryptjs";

const users = [
    {
        name: "admin",
        lastName: "admin",
        email: "admin@admin.com",
        password: bcrypt.hashSync("admin@admin.com", 10),
        isAdmin: true
    }, 
    {
        name: "John",
        lastName: "Doe",
        email: "john@doe.com",
        password: bcrypt.hashSync("john@doe.com", 10),
        isAdmin: true
    }, 
    {
        name: "Vassilis",
        lastName: "Brachos",
        email: "cr7brachos@gmail.com",
        password: bcrypt.hashSync("cr7brachos@gmail.com", 10),
        isAdmin: true
    }, 

    

];

export default users;