/* eslint-disable react/prop-types */

import axios from "axios";
import { useEffect, useState } from "react";

const Card = ({ item }) => {

  
  const [admin, setAdmin] = useState(false)

  useEffect(() => {
    const handleAdmin = async () => {
      const userInfo = localStorage.getItem("User");
      const userId = JSON.parse(userInfo)._id;
      const res = await axios.get(
        `http://localhost:4001/user/profile/${userId}`
      );
      console.log(res.data.role)
      if (res.data.role === "Admin") {
        setAdmin(true)
      }
    }
    handleAdmin()
  }, [])


  return (
    <>
      <div className="mt-2 p-0 lg:p-4">
        <div className="card w-90 shadow-md bg-base-300 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure className="mt-3">
            <img
              className="w-55 h-60"
              src={item.image}
              alt="Books" />
          </figure>
          <div className="card-body">
          {admin &&
                <p className="text-sm text-pink-500">id: {item._id}</p>
                }
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between mt-1">
              <div className="badge badge-outline p-4 cursor-pointer hover:bg-pink-500 duration-200 hover:text-black">{item.lang}</div>
              <a
                href={item.link} target="_blank" className="badge badge-outline p-4 cursor-pointer hover:bg-pink-500 duration-200 hover:text-black">Read Book</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Card;
