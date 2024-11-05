import BooksModel from "../Models/booksModel.js";


const addBook = async (req, res) => {
    try {
        const data = await BooksModel.create(req.body)
        res.status(200).json({message: "Book added successfully",data})
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export default addBook;