import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    fileName: String,
    description: String,
    contentType: String,
    data: Buffer
});


export default mongoose.model("uploadImage", imageSchema);