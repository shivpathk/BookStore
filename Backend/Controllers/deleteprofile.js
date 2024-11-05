import UserModel from "../Models/userModel.js"

const deleteprofile = async (req,res)=>{
    try{
        const data = await UserModel.findOne({_id:req.params.id})
        if(data){
            await UserModel.deleteOne({_id:req.params.id})
            .then(()=>{
                res.status(200).json({message:"Profile Deleted Successfully"})
            }).catch((error)=>{
                res.status(500).json({message:error.message})
            })
        }else{
            return res.status(404).json({message:"User not found"})
        }
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

export default deleteprofile