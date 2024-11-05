import BooksModel from "../Models/booksModel.js"

const getBook = async(req,res)=>{
    try{
        const data = await BooksModel.findOne({_id:req.params.id})
        res.status(200).json(data)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

export default getBook