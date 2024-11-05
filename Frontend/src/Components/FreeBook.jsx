import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
import { useEffect, useState } from "react";
import axios from "axios";

const FreeBook = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [freebooks,setFreebooks] = useState([])
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const res = await axios.get('https://bookstore-backend-m8u6.onrender.com/books')
                setFreebooks(res.data)
            }catch(error){
                console.error(error);
            }
        }
        fetchData();
    },[])


    const filterData = freebooks.filter((item) =>
        item.category === "Free"
    )
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-7" >
                <div className='mt-20 mb-10 md:mt-0'>
                    <h1 className='font-bold text-2xl pd-2 mb-5'>
                        Free Offered Books
                    </h1>

                    <p>Here are some of the free books which we give you without any hidden costs or subscriptions, for accessing all books at your convenience you can visit Books section from the navigation bar and get your desired book, you just have to signup and login for accessing our all books.</p>
                </div>
                <div className='m-5'>
                    <div className="slider-container">
                        <Slider {...settings}>
                            {filterData.map((item) => {
                                return (
                                    <Card item={item} key={item._id} />
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </div>

        </>
    );
};

export default FreeBook;
