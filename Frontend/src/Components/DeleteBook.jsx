

import axios from "axios";
import toast from "react-hot-toast";

import { useForm } from "react-hook-form";
import { useState } from "react";

const DeleteBook = () => {

    const[book,setBook] = useState({})

    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = async (data) => {
        document.getElementById('modal_delete_book').close()
        const bookData = await axios.get(`https://bookstore-backend-m8u6.onrender.com/book/${data.id}`)
        if(bookData.data){
            setBook(bookData.data)
            document.getElementById('modal_delete_book_confirm').showModal()
        }else{
            toast.error('Book not found')
        }
    }

    const handleDelete = async () => {
        try {
            await axios.delete(`https://bookstore-backend-m8u6.onrender.com/book/${book._id}`)
            toast.success("Book Deleted Successfully")
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
    <button className="btn btn-secondary btn-sm md:btn-md mt-3 md:mt-5 hover:bg-pink-700 m-2" onClick={() => document.getElementById('modal_delete_book').showModal()}>Delete Book
    </button>
    <dialog id="modal_delete_book" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white ">
            <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <form className="max-w-sm mx-auto lg:mt-10" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-5">
                    <label
                        className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                       Enter the Book ID
                    </label>
                    <input
                        type="text"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:shadow-sm-light"
                        placeholder="Book ID"
                        {...register("id", { required: true })}
                    />
                </div>
                <button
                    className="btn btn-secondary btn-sm lg:btn-md lg:m-5 hover:bg-pink-700 "
                >
                    Delete
                </button>
            </form>
        </div>
    </dialog>
    <dialog id="modal_delete_book_confirm" className="modal">
                <div className="modal-box dark:bg-slate-900 dark:text-white ">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="p-4 md:p-5 text-center">
                        <svg
                            className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete <span className="font-bold text-pink-500">{book.name}</span> ?
                        </h3>
                        <form method="dialog">
                            <button
                                data-modal-hide="popup-modal"
                                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                                onClick={handleDelete}
                            >
                                Yes, I am sure
                            </button>
                            <button
                                className=" py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                No, cancel
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
</>

  )
};

export default DeleteBook;
