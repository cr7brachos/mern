import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
    
        const {pathname} = useLocation(); //επιστρέφει το path στο οποίο γίνεται link
       

        useEffect(()=>{
            window.scrollTo(0,0); //θέτει το scrollbar στη πανω θέση
        },[pathname])

    return null;
};

export default ScrollTop;