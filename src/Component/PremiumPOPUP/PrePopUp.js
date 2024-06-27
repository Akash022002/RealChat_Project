import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import Preloader from "../Preloader/Preloader";
import PopUp from "./PopUp";



const PrePopUp =(props)=>{
    const [preloader,setPreloader] = useState(true);
    useEffect(()=>{
        setTimeout(() => {
            setPreloader(false);    
        }, 1500);
    },[])
    return(
        <Fragment>
            <div>
                {/*preloader ? <Preloader/>:<PopUp/>*/}
                <PopUp></PopUp>
            </div>
        </Fragment>
    )
}
export default PrePopUp;