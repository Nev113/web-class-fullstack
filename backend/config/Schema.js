import mongoose from "mongoose";


const userModel = new mongoose.Schema({
    idAccount: String,
    username: String,
    password: String,
    email: String,
    role: String
});
export default mongoose.model("User", userModel);