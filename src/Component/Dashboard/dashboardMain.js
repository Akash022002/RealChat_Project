//Dashboard code for add that with the preloader 
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import Preloader from "../Preloader/Preloader";
import Dashboard from "./dashboard";

const DashboardMain =(props)=>{
    //Code for handle the event of the preloader 
    const [preloader, setPreloader] = useState(true);
    //Handle the loading time of the preloader into the Dashboard page
    useEffect(()=>{
        setTimeout(() => {
            setPreloader(false);    
        }, 1500);
    },[])
    return(
        <Fragment>
            <div>
                {preloader ? <Preloader/>:<Dashboard/>}
            </div>
        </Fragment>
    )
}
export default DashboardMain;