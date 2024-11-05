/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default function Authprovider ({ children }){

    const [auth,setAuth] = useState(localStorage.getItem("User") ? JSON.parse(localStorage.getItem("User")) : undefined);

    useEffect(()=>{
        const user = localStorage.getItem("User")
        setAuth(JSON.parse(user))
    },[])

    return(
    <AuthContext.Provider value={[auth,setAuth]}>
        {children}
    </AuthContext.Provider>
    )
};

export const useAuth = ()=> useContext(AuthContext);
