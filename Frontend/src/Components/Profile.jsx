import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import DeleteProfile from "./DeleteProfile";
import EditProfile from "./EditProfile";

const Profile = () => {
  const [user, setUser] = useState([""]);

  useEffect(() => {
    toast.success("Profile Page");
    async function fetchData() {
      try {
        const userInfo = localStorage.getItem("User");
        const userId = JSON.parse(userInfo)._id;

        const res = await axios.get(
          `https://bookstore-backend-m8u6.onrender.com/user/profile/${userId}`
        );
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-7 flex items-center justify-center">
        <div className="p-5 border border-slate-400 shadow-md shadow-slate-500 rounded bg-white dark:bg-slate-900 text-center text-gray-800 dark:text-white lg:min-w-[500px] ">
          <img
            className="w-32 h-32 lg:w-52 lg:h-52 rounded-full mx-auto"
            src={user.image}
            alt=""
          />
          <div className="text-sm mt-5">
            <h1 className="text-xl lg:text-2xl font-semibold capitalize">{user.name}</h1>
            <p className="text-gray-500 font-semibold mt-1 "><span className="bg-pink-700 text-white rounded px-2 my-1">{user.role}</span></p>
          </div>
          <div className="flex flex-col m-5">
            <div className="flex flex-row justify-between text-sm lg:text-lg border-slate-800 border-b-2 ">
                <h1>Email : </h1>
                <h1 className="pl-2">{user.email}</h1>
            </div>
            <div className="flex flex-row justify-between text-sm lg:text-lg border-slate-800 border-b-2 ">
                <h1>Gender : </h1>
                <h1 className="pl-2">{user.gender}</h1>
            </div>
            <div className="flex flex-row justify-between text-sm lg:text-lg border-slate-800 border-b-2 ">
                <h1>Date of birth : </h1>
                <h1 className="pl-2">{user.dob}</h1>
            </div>
            <div className="flex flex-row justify-between text-sm lg:text-lg border-slate-800 border-b-2 ">
                <h1>Phone Number : </h1>
                <h1 className="pl-2">{user.phone}</h1>
            </div>
            <div className="flex flex-row justify-between text-sm lg:text-lg border-slate-800 border-b-2 ">
                <h1>Address : </h1>
                <h1 className="pl-2">{user.address}</h1>
            </div>
          </div>
          <div className="flex justify-around">
            <EditProfile id={user._id} email={user.email} name={user.name} phone={user.phone} address={user.address} dob={user.dob} gender={user.gender} image={user.image}/>
            <DeleteProfile/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
