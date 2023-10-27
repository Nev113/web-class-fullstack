import mongoose from "mongoose";


const userModel = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    role: String
});
return mongoose.model("User", userModel);