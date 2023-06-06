import React from "react";
import { Outlet } from "react-router-dom";
import UserChatComponent from "./UserChatComponent";

const RoutesWithUserChatComponent = () => {

    return (

        <>
        
        <Outlet />
        <UserChatComponent />
        
        
        </>

    );

};

export default RoutesWithUserChatComponent;