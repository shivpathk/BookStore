import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Profile from "../Components/Profile";



const ProfilePage = () => {
  return (
    <>
        <Navbar/>
        <div className="flex min-h-screen">
            <Profile/>
        </div>
        <Footer/>
    </>
  )
};

export default ProfilePage;
