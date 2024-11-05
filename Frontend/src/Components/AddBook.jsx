

import axios from "axios";
import toast from "react-hot-toast";

import { useForm } from "react-hook-form";

const AddBook = () => {
    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = async (data) => {
        document.getElementById('modal_add_book').close()
        await axios.post(`http://localhost:4001/book`, data)
            .then((res)=>{
                if(res.data){
                    toast.success("Book Added Successfully")
                }
                setTimeout(()=>{
                    window.location.reload()
                },2000)
            }).catch((error)=>{
                console.log(error)
                if(error.response){
                    toast.error("Error : "+error.response.data.message)
                }else{
                    toast.error("Error : Something is wrong")
                }
            })
    }
  return (
    <>
    <button className="btn btn-secondary btn-sm md:btn-md mt-3 md:mt-5 hover:bg-pink-700 m-2" onClick={() => document.getElementById('modal_add_book').showModal()}>Add Book
    </button>
    <dialog id="modal_add_book" className="modal">
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
                        placeholder="Book Name"
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
                        placeholder="Book Language"
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
                        placeholder="Book Category"
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
                        placeholder="Image Link"
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
                        placeholder="Book Description"
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
                        placeholder="Book PDF link"
                        {...register("link", { required: true })}
                    />
                </div>
                <button
                    className="btn btn-secondary btn-sm lg:btn-md lg:m-5 hover:bg-pink-700 "
                >
                    Add Book
                </button>
            </form>
        </div>
    </dialog>
</>

  )
};

export default AddBook;
