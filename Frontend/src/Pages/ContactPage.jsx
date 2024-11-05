import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const ContactPage = () => {
  return (
    <>
        <Navbar/>
        <div className="min-h-screen">
            <Contact/>
        </div>
        <Footer/>
    </>
  )
};

export default ContactPage;
