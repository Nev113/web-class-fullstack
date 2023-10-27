import userModel from "./Schema.js";
import imageSchema from "./imageSchema.js";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({storage: storage})

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
        const user = new userModel({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            role: req.body.role
        });
        await user.save();
        res.json("Data berhasil ditambahkan").status(201);
    } catch (error) {
        console.log(error);
    }
}

export const findUser = (req, res) => {
    userModel.findOne({ username: req.body.username }, (err, data) => {
        if (err) {
            return res.status(500).json({ message: err });
        } else {
            return res.json(data);
        }
    });
}

export const deleteUser = async (req, res) => {
    try {
        const { username } = req.params;
        await userModel.findByIdAndRemove(username);
        res.json("Data berhasil dihapus").status(201);
    } catch (error) {
        console.log(error);
        res.json("Data gagal dihapus").status(500);
    }
};

export const uploadImage = async (req, res) => {
    try {
        const image = new imageSchema({
            fileName: req.file.originalname,
            description: req.description,
            contentType: req.contentType,
            data: req.file.buffer
        });
        await image.save();
        res.json('Data Image berhasil ditambahkan.').status(200);
    } catch (error) {
        console.log(error);
        res.json({msg: "Data gagal ditambahkan", error: error}).status(500);
    }
}