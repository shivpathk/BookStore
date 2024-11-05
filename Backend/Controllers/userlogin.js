import UserModel from "../Models/userModel.js"
import bcryptjs from 'bcryptjs'

const userlogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await UserModel.findOne({ email })
        if (user) {
            const isMatch = await bcryptjs.compare(password, user.password)
            if (isMatch) {
                res.status(200).json({
                    message: "Login Successful",
                    user: {
                        _id:user._id,
                        name: user.name,
                        email: user.email,
                    }
                })
            } else {
                res.status(400).json({ message: "Password is incorrect" })
            }
        } else {
            res.status(400).json({ message: "User does not exist" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export default userlogin