//Code for add the ContactUs page into the realchat project
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import Preloader from "../Preloader/Preloader";
import ContactPage from "./ContactPage";


const ContactMain =(props)=>{
    //Code for handle the preloader into the contact us page
    const [preloader,setpreloader] = useState(true);
    useEffect(() =>{
        setTimeout(() => {
            setpreloader(false);      
        }, 1500);
    },[]);
    return(
        <Fragment>
            <div>
                {preloader ? <Preloader/> : <ContactPage/>}
            </div>
        </Fragment>
    )
}

export default ContactMain;
