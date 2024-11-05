import toast from "react-hot-toast";

const Banner = () => {
    const handleSubmit = ()=>{

        const email = document.querySelector('#subscribe-email').value;

        if(email === ""){
            toast.error("Please enter your email")
        }
        else{
            document.querySelector('#subscribe-email').value = "";
            toast.success("Thank You For Subscribing")
        }

    }
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-7 flex flex-col lg:flex-row justify-center items-center mt-12 pt-12 md:mt-0" style={{ height: "100vh" }}>
                <div className="w-full lg:w-1/2 mt-4 md:mt-0 order-2 md:order-1">
                    <div className="space-y-6 md:space-y-12">
                        <h1 className="text-3xl md:text-5xl font-bold">Hello, welcome to the Book Store and learn something{" "}<span className="text-pink-500">new everyday!!</span></h1>
                        <p className="text-xl">BookStore is your one-stop destination for a world of literature. Explore a vast collection of books in both Hindi and English, all available to read online or download for offline enjoyment. Whether you are a seasoned reader or just starting your literary journey, BookStore offers a seamless and user-friendly experience. Enjoy all these features absolutely free :)</p>
                    </div>
                    <div className="mt-5 md:mt-15">
                        <label className="input input-bordered flex items-center gap-2 shadow-md bg-base-200 dark:bg-slate-900 dark:text-white dark:border-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" id="subscribe-email" className="grow" placeholder="Email" />
                        </label>
                        <button 
                        className="btn btn-secondary btn-sm md:btn-md mt-2 md:mt-5 hover:bg-pink-700"
                        id="subscribe-button"
                        onClick={handleSubmit}
                        >Subscribe</button>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 p-0 pt-2 order-1 md:p-12 md:pt-10">
                    <img
                        src='https://img.freepik.com/free-vector/world-book-day-background-with-butterflies-realistic-style_23-2147608600.jpg?t=st=1730633413~exp=1730637013~hmac=e8484b032dcb578c07cac1b7bd600283d3beb8b03ca1ba7636df2ff1e45a7fe5&w=826'
                        className='w-full rounded-full'
                        alt="bannerImage" />
                </div>
            </div>
        </>
    );
};

export default Banner;
