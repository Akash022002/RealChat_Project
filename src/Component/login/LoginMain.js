// Code for add the login page into the out realchat project
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import Preloader from "../Preloader/Preloader";
import Login from "./Login";

const LoginMain =()=>{
    // Code for handle the login preloader into the project
    const [preloader, setpreloader] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setpreloader(false);
        },1500);
    },[]);
    return(
        //Code for handle the preloader and the main login page content
        <Fragment>
            <div>
                {preloader? <Preloader/> : <Login/>}
            </div>
        </Fragment>
    )
}
export default LoginMain;