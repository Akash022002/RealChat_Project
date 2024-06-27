import React, { useEffect, useState } from "react";
import { Fragment } from "react"
import Preloader from "../Preloader/Preloader";
import Home from "./Home";

const HomeMain =(props)=>{
    // Code for handle the main home page and the their preloader into the homemain
    const [preloader, setPreloader] = useState(true);
    useEffect(()=>{
        // Condition for add the timer for load the preloader
        setTimeout(() => {
            setPreloader(false);
        }, 1500);
    },[])
    return(
        // JSX code for add the condition for add the Home page and the preloader page
        <Fragment>
            <div>
                {preloader ? <Preloader/> : <Home/>}
            </div>
        </Fragment>
    )
}

export default HomeMain;