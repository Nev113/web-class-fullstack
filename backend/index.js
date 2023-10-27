import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { getUser, createUser } from "./config/routes";

const app = express();

mongoose.connect("mongodb+srv://nevosangkane:nevosangkane123@cluster0.awihbqj.mongodb.net/User?retryWrites=true&w=majority", {
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
    console.log("Database connected");
}
);


app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log("Server started");
}
);

app.get("/", (req, res) => {
    res.send("Hello World!");
}
);
