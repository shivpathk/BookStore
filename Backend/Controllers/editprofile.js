import UserModel from "../Models/userModel.js"
const editprofile = async (req, res) => {
    try {
        const data = await UserModel.findOne({ _id: req.params.id })
        if (data) {
            await UserModel.findByIdAndUpdate(req.params.id, req.body)
                .then(() => {
                    res.json({ message: "Profile updated successfully" })
                }).catch((error) => {
                    res.status(500).json({ message: error.message })
                })
        }else{
            res.status(404).json({ message: "User not found" })
        }

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
export default editprofile;