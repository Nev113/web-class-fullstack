import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    idImage: String,
    fileName: String,
    contentType: String,
    data: Buffer,
    uploadDate: String,
});


export default mongoose.model("uploadImage", imageSchema);