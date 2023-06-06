import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserChatComponent from "./user/UserChatComponent";

/* 
εάν auth = true, τότε αφήνει να προχωρήσουμε στις σελίδες που βρίσκονται μέσα στο App, μέσα στο ProtectedRouteComponent
αλλιώς κάνει redirect στο login
*/

const ProtectedRouteComponent = (props) => {
    
    

    if (props.admin) {
        let adminAuth = true;
        return adminAuth ? <Outlet /> : <Navigate to="/login" />;

    } else {
        let userAuth = true;
        return (
            userAuth ? <>

            <Outlet />
            <UserChatComponent />
        
            </> : <Navigate to="/login" />
        )
        
    }

    

}

export default ProtectedRouteComponent;