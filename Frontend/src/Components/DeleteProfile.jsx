
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../Context/Authprovider";


const DeleteProfile = () => {
    const [auth,setAuth] = useAuth();

    const handleDelete = async () => {
        try {
            const id = JSON.parse(localStorage.getItem("User"))._id
            await axios.delete(`https://bookstore-backend-m8u6.onrender.com/user/profile/${id}`)
            setAuth({
                ...auth,
                user:null
            })
            localStorage.removeItem("User")
            toast.success("Profile Deleted Successfully")
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
            <button className=" btn btn-secondary btn-sm md:btn-md mt-3 md:mt-5 bg-red-500 hover:bg-red-800 ml-2" onClick={() => document.getElementById('modal_delete_profile').showModal()}>Delete Profile</button>
            <dialog id="modal_delete_profile" className="modal">
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
                            Are you sure you want to delete your profile ?
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

export default DeleteProfile;
