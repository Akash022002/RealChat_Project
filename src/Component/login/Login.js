// Main component code for login page 
//import reportWebVitals from "../../reportWebVitals";
import React, { Fragment } from "react";
//import { Fragment } from "react";
import './Login.css';

const Login =(props)=>{
    return(
        // Code for handle the login page main JSX Code
        <Fragment>
			 
    		<div className="desktop-4">
      			 <div className="navcont">
					<a href="/login"><img className="logo" alt="..." src="./newlogo.png"></img></a>
					<div className="navbar1">
					<a href="/">Home</a>
					<a href="/blog">Blog</a>
					<a href="/about">About</a>
					<a href="/contact">Contact</a>
				 </div>
				 <button className="btn1">
					<a href="/register">Sign Up</a>
				 </button>
				 </div>
				 
      			<div className="rectangle-parent">
        				<div className="group-child" />
        				<img className="icons8-crescent-moon-100-1" alt="" src="icons8-crescent-moon-100 1.png" />
      			</div>
      			<div className="fotor-20240213171729-2-parent">
        				<img className="fotor-20240213171729-2-icon" alt="" src="fotor-20240213171729 2.png" />
        				<div className="group-item" />
      			</div>
      			<img className="b6fad8179462d6ae2bd5605ed5d509-icon" alt="" src="1b6fad8179462d6ae2bd5605ed5d5090-removebg-preview 1.png" />
      			 
      			<img className="untitled-1-copy-1" alt="" src="Untitled-1 copy 1.png" />
				<img className="back" src="./banner-1@2x.png" alt="..."></img>
      			<img className="original-b53e3a1ec92544866e42c-icon1" alt="" src="original-b53e3a1ec92544866e42cd9d1e91c91a-removebg-preview 2.png" />
      			<i className="welcome-to-chatbot1">Welcome to RealChat</i>
      			<input type="text" className="rectangle-divnew1" />
      			<i className="username1">Username</i>
      			<div className="desktop-4-child1" />
      			<i className="password1">Password</i>
      			<div className="desktop-4-child2" />
      			<a href="/userchat" className="log-in">Log In</a>
      			<i className="dont-have-an">Don’t have an account?</i>
        				<i className="can-you-change">Can you change your plan?</i>
          					<a href="/contact" className="btn"><i className="contact-us"><p>Contact Us</p></i></a>
          					<i className="whenever-you-want">{`Whenever you want. We are also change with you according to your need `}</i>
          					<a href="/register" className="sign-up">Sign Up!</a>
          					<div className="line-div1" />
          					<div className="ellipse-div" />
          					<img className="icons8-question-mark-100-1" alt="" src="icons8-question-mark-100 1.png" />
			</div>
        				
        				
        </Fragment>
    )
}
export default Login;