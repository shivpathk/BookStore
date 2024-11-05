/* eslint-disable react/prop-types */

import axios from "axios";
import toast from "react-hot-toast";

import { useForm } from "react-hook-form";


const EditProfile = ({ id, email, name, phone, address, dob, gender, image }) => {
    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = async (data) => {
        document.getElementById('my_modal_edit').close()
        await axios.put(`https://bookstore-backend-m8u6.onrender.com/user/profile/${id}`, data)
            .then((res)=>{
                if(res.data){
                    toast.success("Profile Updated Successfully")
                }
                setTimeout(()=>{
                    window.location.reload()
                },2000)
            }).catch((error)=>{
                if(error.response){
                    toast.error("Error : "+error.response.data.message)
                }else{
                    toast.error("Error : Something is wrong")
                }
            })
    }


    return (
            <>
                <button className="btn btn-secondary btn-sm md:btn-md mt-3 md:mt-5 hover:bg-pink-700 " onClick={() => document.getElementById('my_modal_edit').showModal()}>Edit Profile
                </button>
                <dialog id="my_modal_edit" className="modal">
                    <div className="modal-box dark:bg-slate-900 dark:text-white ">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <form className="max-w-sm mx-auto lg:mt-10" onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-5">
                                <label
                                    className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:shadow-sm-light"
                                    defaultValue={name}
                                    {...register("name", { required: true })}
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:shadow-sm-light"
                                    defaultValue={email}
                                    {...register("email", { required: true })}
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Gender
                                </label>
                                <input
                                    type="text"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:shadow-sm-light"
                                    defaultValue={gender}
                                    {...register("gender", { required: true })}
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Date of Birth
                                </label>
                                <input
                                    type="text"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:shadow-sm-light"
                                    defaultValue={dob}
                                    {...register("dob", { required: true })}
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:shadow-sm-light"
                                    defaultValue={phone}
                                    {...register("phone", { required: true })}
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    className="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Address
                                </label>
                                <input
                                    type="text"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:shadow-sm-light"
                                    defaultValue={address}
                                    {...register("address", { required: true })}
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
                                    defaultValue={image}
                                    {...register("image", { required: true })}
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

export default EditProfile;
