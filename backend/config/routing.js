import { Router } from "express";

import { getUser, createUser, deleteUser, upload, uploadImage, getImage, updateUser, findUser, getImageById, deleteImage, loginUser } from "./routes.js";

const router = Router();
const routers = [
router.get("/", getUser),
router.post('/add', createUser),
router.get("/user/:id", findUser),
router.get("/user", deleteUser),
router.delete("/user/:username", deleteUser),
router.post("/image", upload.single("image"), uploadImage),
router.get("/image", getImage),
router.put("/user/:username", updateUser),
router.get("/image/:id", getImageById),
router.delete("/image/:id", deleteImage),
router.post("/login", loginUser),
]

export default routers;