import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import Preloader from "../Preloader/Preloader";
import PremiumBuy from "./PremiumBuy";

const PremiumMain =(props)=>{
    // code for add the preloader into the Premiumpage
    const[preloader, setpreloader] = useState(true);

    useEffect(() => {
        // Apply an the timeout for the loading an the content
        setTimeout(() => {
          setpreloader(false);
        }, 1500);
      }, []);
      return(
        // Here we are handle the timeout ocndition for preloader and main page for load it at specific time.  
        <Fragment>
            <div>
                {preloader? <Preloader/>:<PremiumBuy/>}
            </div>
        </Fragment>
      )
}

export default PremiumMain;