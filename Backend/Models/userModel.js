import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        default:"https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1730695123~exp=1730698723~hmac=eb00e63ca93a7b1bed2dd21d573eac526c5ac98e195097a82f338bee2401f660&w=740"
    },
    gender:{
        type:String,
        default:"Male"
    },
    address:{
        type:String,
        default:"India"
    },
    dob:{
        type:String,
        default:"01-01-2000"
    },
    phone:{
        type:String,
        default:"1234567890"
    },
    role:{
        type:String,
        default:"Book Reader"
    },
    books:{
        type:String,
        default:0
    }

})

const UserModel = mongoose.model("user",UserSchema)

export default UserModel