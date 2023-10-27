import userModel from "./Schema.js";

export const getUser = (req, res) => {
    userModel.find((err, data) => {
        if (err) {
            return res.status(500).json({ message: err });
        } else {
            return res.json(data);
        }
    });
};

export const createUser = (req, res) => {
    const user = new userModel({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        role: req.body.role
    });
    user.save((err) => {
        if (err) {
            return res.status(500).json({ message: err });
        } else {
            return res.json(user);
        }
    });
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