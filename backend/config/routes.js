import userModel from "./Schema.js";
import imageSchema from "./imageSchema.js";
import multer from "multer";
import { nanoid } from "nanoid";
import jwt from "jsonwebtoken";

export const storage = multer.memoryStorage();
export const upload = multer({storage: storage})

export const getUser = async (req, res) => {
    try {
        const data = await userModel.find();
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error });
    }
};

export const createUser = async (req, res) => {
    try {
        const id = nanoid(16);
        const user = new userModel({
            idAccount: id,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            role: req.body.role
        });
        await user.save();
        res.json({msg: "Data berhasil diinput", status: "success", data:{id}}).status(201);
    } catch (error) {
        res.json({msg: "Data gagal diinput", status: "error", error: error}).status(500);
        console.log(error);
    }
}

export const findUser = async (req, res) => {
    try {
        const data = await userModel.findOne({ idAccount: req.params.id });
        res.json({status: "success", data:{data}}).status(201);   
    } catch (error) {
        return res.json({msg: "Data gagal diinput", status: "error", error: error}).status(500);
    }
}

export const updateUser = async (req, res) => {
    try {
        const { username } = req.params;
        const { password, email, role } = req.body;
        const data = await userModel.findOneAndUpdate({username: username}, { password, email, role });
        res.json("Data berhasil diupdate").status(201);
    } catch (error) {
        console.log(error);
        res.json("Data gagal diupdate").status(500);
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { username } = req.params;
        const result = await userModel.findOneAndRemove({idAccount: username});
        if(result == null) return res.json({status: "fail" ,msg:"Data tidak ditemukan."}).status(404);
        res.json({status: "success" ,msg:"Data berhasil dihapus"}).status(201);
    } catch (error) {
        console.log(error);
        res.json({status: "fail" ,msg:"Data gagal dihapus"}).status(500);
    }
};

export const uploadImage = async (req, res) => {
    try {
        if(req.file.mimetype === "image/png" || req.file.mimetype === "image/jpg" || req.file.mimetype === "image/jpeg"){
        const id = nanoid(10);
        const image = new imageSchema({
            idImage: id,
            title: req.title,
            description: req.description,
            contentType: req.file.mimetype,
            data: req.file.buffer,
            uploadDate: new Date().toLocaleString("id-ID", {timeZone: "Asia/Jakarta", hour12: false, hour: "numeric", minute: "numeric", second: "numeric", day: "numeric", month: "long", year: "numeric", weekday: "long",}),
        });
        await image.save();
        res.json({status: "success" ,msg:'Data Image berhasil ditambahkan.', data:{id}}).status(200);
        } else {
        return res.json({status: "fail", msg: "Data gagal ditambahkan", error: "Silahkan masukkan type file yang benar"});
        }
    } catch (error) {
        console.log(error);
        res.json({status: "fail" ,msg: "Data gagal ditambahkan", error: error}).status(500);
    };
};

export const getImage = async (req, res) => {
    try {
        const data = await imageSchema.find();
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.json({status: "fail" ,msg:"Data gagal diambil."});
    }
};

export const getImageById = async (req, res) => {
    try {
        const data = await imageSchema.findOne({ idImage: req.params.id });
        if (data == null) return res.json({status: "fail" ,msg:"Data tidak ditemukan."})
        res.json({status: "success" ,msg:"Data berhasil diambil.", data}).status(200);
    } catch (error) {
        console.log(error);
        res.json({status: "fail" ,msg:"Data gagal diambil."});
    }
};

export const deleteImage = async (req, res) => {
    try {
        const { id } = req.params;
        await imageSchema.findOneAndRemove({idImage: id});
        res.json({status: "success" ,msg:"Data berhasil dihapus."}).status(200);
    } catch (error) {
        console.log(error);
        res.json({status: "fail",msg:"Data gagal dihapus."});
    }
}

export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const admin = await userModel.findOne({username, password});
        if(!admin) return res.json({status: "fail" ,msg:"Gagal Login."}).status(401);
        const user = {
            id: admin.idAccount,
            username: admin.username,
            role: admin.role
        }
        const token =  jwt.sign(user, "admin-secret-alok", {expiresIn: "1h", algorithm: "HS256"});
        res.json({status: "success" ,msg:"Berhasil Login.", data:{token}}).status(200);
    } catch (error) {
        console.log(error);
        res.status(500).json({status: "fail" ,msg:"gagal login (kesalahan server)"});
    }
}
