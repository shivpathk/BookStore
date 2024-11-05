/* eslint-disable react/no-unescaped-entities */

import Card from './Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AddBook from './AddBook';
import EditBook from './EditBook';
import DeleteBook from './DeleteBook';


const Books = () => {
    const [books, setBooks] = useState([])
    const [admin, setAdmin] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://bookstore-backend-m8u6.onrender.com/books')
                setBooks(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        handleAdmin()
    }, [])

    const handleAdmin = async () => {
        const userInfo = localStorage.getItem("User");
        const userId = JSON.parse(userInfo)._id;
        const res = await axios.get(
            `https://bookstore-backend-m8u6.onrender.com/user/profile/${userId}`
        );
        console.log(res.data.role)
        if (res.data.role === "Admin") {
            setAdmin(true)
        }
    }

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-7">
                <div className="pt-20 items-center - justify-center text-center">
                    <h1 className="text-2xl md:text-4xl font-bold"> We're delighted to have you{" "}<span className="text-pink-500">here :) </span></h1>
                    <p className='mt-12'>Your one-stop destination for all things books! Here, you'll find a vast collection of titles across a wide range of genres, from timeless classics to the latest bestsellers, all carefully curated to cater to every type of reader. Whether you’re in search of a thrilling mystery, a heartwarming romance, a thought-provoking nonfiction piece, or a captivating fantasy adventure, we've got something just for you. Our mission at bookStore is to make reading accessible and enjoyable, offering high-quality books that inspire, entertain, and educate. Each book listing comes with detailed descriptions, reader reviews, and recommendations to help you make the perfect choice. We also provide various formats—hardcover, paperback, and digital—to suit your reading preference. Explore our collection, discover new favorites, and let bookStore be your guide on a literary journey. Happy reading!
                    </p>
                    {admin &&
                        (<div>
                            <AddBook />
                            <EditBook />
                            <DeleteBook />
                        </div>
                        )
                    }
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4'>
                    {books.map((item) => (
                        <Card key={item._id} item={item} />
                    ))}
                </div>
            </div>
        </>
    )
};

export default Books;
