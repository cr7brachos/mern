import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);

const hashPassword = password => bcrypt.hashSync(password, salt); //επειδή επιστρέφω μια μόνο λειτουργία δε χρειάζομαι return και παρενθέσεις

const comparePasswords = (inputPassword, hashedPassword) => bcrypt.compareSync(inputPassword, hashedPassword);

export default hashPassword;

export { comparePasswords };