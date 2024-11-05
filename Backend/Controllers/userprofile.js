import UserModel from "../Models/userModel.js"

const userprofile = async(req,res)=>{
    try{

        const data = await UserModel.findOne({_id:req.params.id})
        res.status(200).json(data)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

export default userprofile