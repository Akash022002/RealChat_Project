import React, { useEffect } from "react";
import { Fragment } from "react";
import './Registration.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Registration =(props)=>{
	//Code for add the register page data into the database 

	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassowrd] = useState('');

	function saveData()
	{
		// registerData().then((response)=>{
		// 	console.log(response.data);
		// 	navigator("/userchat");
		// }).catch(error=>{
		// 	console.log(error);
		// })
	}

	const navigator = useNavigate();
    return(
        <Fragment>
            <div>
    		<div className="desktop-6">
			<div className="navcont">
					<a href="/login"><img className="logo" alt="..." src="./newlogo.png"></img></a>
					<div className="navbar1">
					<a href="/">Home</a>
					<a href="/blog">Blog</a>
					<a href="/about">About</a>
					<a href="/contact">Contact</a>
				 </div>
				 <button className="btn1">
					<a href="/login">Sign In</a>
				 </button>
				 </div>
                <div className="desk">
      			<div className="desktop-6-child" />
      			<div className="rectangle-parent">
        				<div className="group-child" />
        				<img className="icons8-crescent-moon-100-1" alt="" src="icons8-crescent-moon-100 1.png" />
      			</div>
      			<div className="fotor-20240213171729-2-parent">
        				<img className="fotor-20240213171729-2-icon" alt="" src="fotor-20240213171729 2.png" />
        				<div className="group-item" />
      			</div>
				<img className="back1" src="./banner-1@2x.png" alt="..."></img>
      			<img className="b6fad8179462d6ae2bd5605ed5d509-icon" alt="" src="1b6fad8179462d6ae2bd5605ed5d5090-removebg-preview 1.png" />
      			<i className="can-you-login">Can you login with that also?</i>
                  <img className="untitled-1-copy-1" alt="" src="Untitled-1 copy 1.png" />

						<div className="ellipse-parent">
          					<div className="group-inner" />
							<a href="/loginshort">
								<img className="facebook-logo-icon-social-medi" alt="" src="facebook-logo-icon-social-media-icon-free-png-removebg-preview 1.png" />
							</a>
        				</div>

        				<div className="ellipse-div" />
        				<div className="desktop-6-child1" />
        				<i className="female"><b>FeMale</b></i>
        				<div className="desktop-6-child2" />
        				<i className="male"><b>Male</b></i>
        				<div className="desktop-6-child3" />
        				<input type="password" className="rectangle-div" />
        				<i className="password"><b>Password</b></i>
        				<i className="register-here">Register here</i>
        				<div className="desktop-6-child4" />
                        <div className="original-b53e3a1ec92544866e42c-icon">
        				<img className="showimg"  alt="..." src="./show.png" />
                        </div><i className="welcome-to-chatbot"><b><b>Welcome to Chatbot</b></b></i>
        				<input type="text" className="desktop-6-child5" />
        				<i className="username">Username</i>
        				<input type="email" className="desktop-6-child6" />
        				<i className="email"><b>Email</b></i>
        				<button onClick={saveData()} className="rectangle-group">
          					<div className="group-child1" />
          					<a type="submit" href="/login" className="register">{`Register `}</a>
        				</button>
        				<a href="/login" className="sign-in">Sign In!</a>
        				<div className="line-div" />
        				<div className="ellipse-group">
          					<div className="group-inner" />
							<a href="/loginshort">
								<img className="png-transparent-google-logo-go-icon" alt="" src="png-transparent-google-logo-google-logo-google-home-google-now-google-plus-company-text-trademark-thumbnail-removebg-preview 1.png" />
							</a>
        				</div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Registration;