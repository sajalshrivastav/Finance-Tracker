const User = require("../Models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const signup = async (req, res) => {
    try {
        const name = req.body.name;
        const password = req.body.password.trim();
        const email = req.body.email.trim();
        const user = await User.findOne({ email: email });
        if (user) {
            return res.status(409).json({ message: "User already exists, You can Sign In" });

        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const userModel = new User({
            userName: name,
            email: email,
            password: hashedPassword
        })
        await userModel.save();
        res.status(201).json({ message: "User created successfully", user: userModel });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        console.error(error);
    }
}
const login = async (req, res) => {
    // res.send('Signup Route')
    try {
        const email = req.body.email.trim();
        const password = req.body.password.trim();
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(403).json({ message: "Email or Passwrod is Incorrect. Please write correct imfo." });

        }
        const isPassEqual = await bcrypt.compare(password, user.password);;
        if (!isPassEqual) {
            return res.status(403).json({ message: "Authentication Failed !!!. email or password is wrong" });
        }
        const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.cookie('token', token);
        res.status(200).json({
            message: "User created successfully",
            success: true,
            token: token,
            user: user,
            name: user.userName
        });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        console.error(error);
    }
}
const getUserInfo = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: "User not Found" })

        }
        res.status(200).json({ user });
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" })
    }
}

module.exports = { signup, login, getUserInfo };