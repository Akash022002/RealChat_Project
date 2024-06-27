//Code for Registration page into the main page for handle the preloader and the main page.
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import Preloader from "../Preloader/Preloader";
import Registration from "./Registration";

const RegistrationMain =(props)=>{
    //Code for handle the preloader and the main page loading in the React
    const [preloader, setpreloader] = useState(true);
    useEffect(()=>{
        //Handle the loading time of the preloader page with the main registration page
        setTimeout(() => {
        setpreloader(false);    
        }, 1500);
    },[])
    return(
        <Fragment>
            <div>
                {preloader ? <Preloader/> : <Registration/>}
            </div>
        </Fragment>
    )
}

export default RegistrationMain;