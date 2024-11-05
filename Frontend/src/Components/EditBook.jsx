

import axios from "axios";
import toast from "react-hot-toast";

import { useForm } from "react-hook-form";
import { useState } from "react";

const EditBook = () => {

    const[book,setBook] = useState({})

    const {
        register,
        handleSubmit,
    } = useForm()

    const confirmEdit = async (e) => {
        e.preventDefault()
        document.getElementById('modal_edit_book').close()
        const data = document.querySelector('#book_id_edit').value
        const bookData = await axios.get(`https://bookstore-backend-m8u6.onrender.com/book/${data}`)
        if(bookData.data){
            setBook(bookData.data)
            document.getElementById('modal_edit_book_confirm').showModal()
        }else{
            toast.error('Book not found')
        }
    }
    
    const onSubmit = async (data) => {
        try {
            document.getElementById('modal_edit_book_confirm').close()
            await axios.put(`https://bookstore-backend-m8u6.onrender.com/book/${book._id}`,data)
            toast.success("Book Updated Successfully")
            setTimeout(()=>{
                window.location.reload()
            },2000)
        } catch (error) {
            console.log(error)
            toast.error("Error : Something is wrong")
            setTimeout(()=>{},2000)
        }
    }


  return (
    <>
    <button className="btn btn-secondary btn-sm md:btn-md mt-3 md:mt-5 hover:bg-pink-700 m-2" onClick={() => document.getElementById('modal_edit_book').showModal()}>Edit Book
    </button>
    <dialog id="modal_edit_book" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white ">
            <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <form className="max-w-sm mx-auto lg:mt-10" onSubmit={(e)=>confirmEdit(e)}>
                <div className="mb-5">
                    <label
                        className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                       Enter the Book ID
                    </label>
                    <input
                        type="text"
                        id="book_id_edit"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:shadow-sm-light"
                        placeholder="Book ID"
                    />
                </div>
                <button
                    className="btn btn-secondary btn-sm lg:btn-md lg:m-5 hover:bg-pink-700 "
                >
                    Edit Book
                </button>
            </form>
        </div>
    </dialog>
    <dialog id="modal_edit_book_confirm" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white ">
            <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <form className="max-w-sm mx-auto lg:mt-10" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-5">
                    <label
                        className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Book Name
                    </label>
                    <input
                        type="text"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:shadow-sm-light"
                        defaultValue={book.name}
                        {...register("name", { required: true })}
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Book Language
                    </label>
                    <input
                        type="text"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:shadow-sm-light"
                        defaultValue={book.lang}
                        {...register("lang", { required: true })}
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Book Category
                    </label>
                    <input
                        type="text"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:shadow-sm-light"
                        defaultValue={book.category}
                        {...register("category", { required: true })}
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Image Link
                    </label>
                    <input
                        type="text"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:shadow-sm-light"
                        defaultValue={book.image}
                        {...register("image", { required: true })}
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Book Description
                    </label>
                    <input
                        type="text"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:shadow-sm-light"
                        defaultValue={book.title}
                        {...register("title", { required: true })}
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Book PDF link
                    </label>
                    <input
                        type="text"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:shadow-sm-light"
                        defaultValue={book.link}
                        {...register("link", { required: true })}
                    />
                </div>
                <button
                    className="btn btn-secondary btn-sm lg:btn-md lg:m-5 hover:bg-pink-700 "
                >
                    Save Changes
                </button>
            </form>
        </div>
    </dialog>
</>

  )
};

export default EditBook;
