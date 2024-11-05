import UserModel from "../Models/userModel.js";
import bcryptjs from 'bcryptjs';

const usersignup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "User already exists" })
        }
        const hashPassword = await bcryptjs.hash(password, 10);
        const data = await UserModel.create({
            name: name,
            email: email,
            password: hashPassword
        })
        res.status(201).json({
            message: "User created successfully",
            user: {
                _id: data._id,
                name: data.name,
                email: data.email
            }
        })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export default usersignup;