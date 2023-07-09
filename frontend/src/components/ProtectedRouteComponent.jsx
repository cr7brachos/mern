import React, { useEffect, useState }from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserChatComponent from "./user/UserChatComponent";
import axios from "axios";
import Login from "../pages/LoginPage";



const ProtectedRouteComponent = ({ admin }) => {
    
    return <Outlet />

    // const [isAuth, setIsAuth] = useState();

    // useEffect(()=>{
    //     axios.get("/api/get-token").then((data) => {
    //         if (data.data.token) {
    //             setIsAuth(data.data.token)
    //         }
    //         return isAuth;
    //     })
    // },[isAuth])
    
    // if (isAuth === undefined) return <Login />

    // return isAuth && admin && isAuth !== "admin" 
    // ? (
    //     <Navigate to="/login" />
    // )
    // : isAuth && admin ? (
    //     <Outlet />
    // ) : isAuth && !admin ? (
    //     <>
    //         <UserChatComponent />
    //         <Outlet />
    //     </>
    // ) : (
    //     <Navigate to="login" />
    // )

    

}

export default ProtectedRouteComponent;