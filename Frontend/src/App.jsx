import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import BooksPage from "./Pages/BooksPage";
import HomePage from "./Pages/HomePage";
import { Navigate, Route, Routes } from 'react-router-dom'
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./Context/Authprovider";
import ProfilePage from "./Pages/ProfilePage";


export default function App() {
  const [auth] = useAuth()

  return (
    <>
      <div className="dark:bg-slate-900 dark-text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/books"
            element={auth ? <BooksPage /> : <Navigate to={'/login'} />} />
          <Route
            path="/profile"
            element={auth ? <ProfilePage /> : <Navigate to={'/login'} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Toaster />
      </div>
    </>
  )
}