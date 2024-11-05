import BooksModel from '../Models/booksModel.js';
const books = async (req,res)=>{
    try{
        const data = await BooksModel.find({})
        res.status(200).json(data)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

export default books;