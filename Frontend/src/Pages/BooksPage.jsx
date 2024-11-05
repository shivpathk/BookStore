import Books from "../Components/Books";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";



const BooksPage = () => {
  return (
    <>
        <Navbar/>
        <div className="min-h-screen">
            <Books/>
        </div>
        <Footer/>
    </>
  )
};

export default BooksPage;
