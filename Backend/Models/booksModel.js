import mongoose from "mongoose";

const BooksSchema = mongoose.Schema({
    
    name:String,
    lang:String,
    category:String,
    image:String,
    title:String,
    link:String
})

const BooksModel = mongoose.model("book" , BooksSchema)

export default BooksModel