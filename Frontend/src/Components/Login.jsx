import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()


  const onSubmit = async(data) => {
      console.log(data)
      const userInfo = {
        email:data.email,
        password : data.password
      }
      await axios.post('http://localhost:4001/user/login', userInfo)
      .then((res)=>{
        if(res.data){
          navigate('/')
          toast.success("Login Successfully")
          setTimeout(()=>{
            window.location.reload()
            localStorage.setItem("User",JSON.stringify(res.data.user))
          },2000)
        }
      }).catch((error)=>{
        if(error.response){
          toast.error("Error : "+error.response.data.message)
        }else{
          toast.error("Error : Something is wrong")
        }
        setTimeout(()=>{},2000)
      })

  }
  return (
    <>
      <div className="flex h-screen items-center justify-center  bg-slate-800 text-white">
        <div className=" w-[400px] md:w-[600px]">
          <div className="modal-box bg-slate-900 text-white">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
              <h3 className="font-bold text-lg">Login</h3>
              <div className="m-4">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email here"
                  className="w-50 md:w-80 px-3 py-1 mt-2 border rounded-md outline-none bg-slate-900 text-white"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && <span className="text-sm text-red-500">Email is required</span>}
              </div>
              <div className="m-4">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password here"
                  className="w-50 md:w-80 px-3 py-1 mt-2 border rounded-md outline-none bg-slate-900 text-white"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && <span className="text-sm text-red-500">Password is required</span>}
              </div>
              <div className="flex justify-around m-2 mt-6">
                <button
                  className="bg-pink-500 text-white rounded-md px-3 py-2 hover:bg-pink-700 duration-200"
                >
                  Login
                </button>
                <p
                  className="mt-1">Not Registered ? {" "}
                  <Link to={"/signup"}
                    className="text-pink-500 font-semibold underline cursor-pointer hover:text-pink-700 duration-200">
                    Signup
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
};

export default Login;
