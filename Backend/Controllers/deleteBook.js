import BooksModel from "../Models/booksModel.js"

const deleteBook = async (req,res) => {
    try{
        const data = await BooksModel.findOne({_id:req.params.id})
        if(data){
            await BooksModel.deleteOne({_id:req.params.id})
            .then(()=>{
                res.status(200).json({message:"Book Deleted Successfully"})
            }).catch((error)=>{
                console.log(error)
                res.status(500).json({message:error.message})
            })
        }else{
            return res.status(404).json({message:"Book not found"})
        }
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

export default deleteBook