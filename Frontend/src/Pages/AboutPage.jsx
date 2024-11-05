import About from "../Components/About";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const AboutPage = () => {
  return (
    <>
        <Navbar/>
        <div className="min-h-screen">
            <About/>
        </div>
        <Footer/>
    </>
  )
};

export default AboutPage;
