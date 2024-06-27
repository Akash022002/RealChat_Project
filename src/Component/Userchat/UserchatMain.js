// Code for main user login chat for each and every user
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import Preloader from "../Preloader/Preloader";
import UserChat from "./Userchat";

const UserchatMain =(props)=>{
    //Code for handle the user settime and hooks for handle the preloader of the page
    const [preloader,setpreloader] = useState(true);
    useEffect(()=>{
        setTimeout(() => {
            setpreloader(false);    
        }, 1500);
    },[])
    return(
        <Fragment>
            <div>
                {preloader ? <Preloader/> : <UserChat/>}
            </div>
        </Fragment>
    )
}
export default UserchatMain;