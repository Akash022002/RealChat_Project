import React, { useState,useEffect } from "react";
import { Fragment } from "react";
import Preloader from "../Preloader/Preloader";
import Payment from "./Payment";

const PaymentMain =(props)=>{
    const [preloader, setPreloader] = useState(true);
    // Condition for handle the main payment page and preloader page by using the settimeout condition 
    useEffect(()=>{
        setTimeout(() => {
            setPreloader(false);    
        }, 1500);
    },[])
    return(
        <Fragment>
            <div>
                {preloader ? <Preloader/>:<Payment/>}
            </div>
        </Fragment>
    )
}
export default PaymentMain;