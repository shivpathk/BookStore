import mongoose from "mongoose";

const DbConnect = (db)=>{
    mongoose.connect(db).then(()=>{
        console.log("Database is Connected Successfully")
    }).catch((error)=>{
        console.log("Database is not Connected",error)
    })
}

export default DbConnect