import React, { Fragment } from "react";
import classes from './Preloader.module.css';

// React js function for preloader into your project
const Preloader =(props)=>{
  const preloader = document.querySelector('#preloader');
  // Js condition for add the preloader into your website 
  
  return(
    <Fragment>
      <div className={classes.container}>
        <div className={classes.preloader}>
            <div className={classes.loader}></div>
        </div>
	  </div>
    </Fragment>
  );
}


export default Preloader;