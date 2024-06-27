import React from "react";
import { Fragment,useState,useEffect } from "react";
import './About.css';
import About from "./About";
import Preloader from "../Preloader/Preloader";

const AboutMain =(props)=>{
    // Code for handle the main home page and the their preloader into the homemain
    const [preloader, setPreloader] = useState(true);
    useEffect(()=>{
        // Condition for add the timer for load the preloader
        setTimeout(() => {
            setPreloader(false);
        }, 1500);
    },[])
    return(
        <Fragment>
            <div>
                {preloader ? <Preloader/> : <About/>}
            </div>
        </Fragment>
    )
}

export default AboutMain;
