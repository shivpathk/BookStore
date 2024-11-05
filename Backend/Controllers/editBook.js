import BooksModel from "../Models/booksModel.js"

const editBook = async(req,res)=>{
    try {
        const data = await BooksModel.findOne({ _id: req.params.id })
        if (data) {
            await BooksModel.findByIdAndUpdate(req.params.id, req.body)
                .then(() => {
                    res.json({ message: "Book updated successfully" })
                }).catch((error) => {
                    res.status(500).json({ message: error.message })
                })
        }else{
            res.status(404).json({ message: "Book not found" })
        }

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export default editBook