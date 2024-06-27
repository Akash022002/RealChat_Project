//Main code for contact page for website of the realchat
import React from "react";
import { Fragment } from "react";
import './Contact.css';

const ContactPage =(props)=>{
    return(
        <Fragment>
            <div className="aboutmain">
                <div className="navcont">
					<a href="/login"><img className="logo" alt="..." src="./newlogo.png"></img></a>
					<div className="navbar1">
                        <a href="/">Home</a>
                        <a href="/blog">Blog</a>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
				    </div>
                    <button className="btn1">
                        <a className="aheight" href="/login">Sign Up</a>
                    </button>
				</div>
                <div className="logomain">
                    <div className="imglogo">
                        <a href="/about"><img className="avatar1" src="./avatar.png" alt="..."></img></a>
                    </div>
                    <div className="abouttext">
                        <p>Contact Us</p>
                    </div>
                    <div className="aboutbottom">
                        <form className="formmain">
                            <div className="form1">
                                <label>Name</label>
                                <input type="text"></input>
                            </div>
                            <div className="form1">
                                <label>Email</label>
                                <input type="email" required  ></input>
                            </div>
                            <div className="form11">
                                <label>Message</label>
                                <input className="textarea1" type="textarea" required  ></input>
                            </div>
                            <button className="btncontact">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="footersec1">
                    <div className="foot">
                        <a className="foothr" href="/about"><img  className="footerlogo" src="./newlogo.png" alt="..."></img></a>
                        <div className="afoot">
                            <a className="foota" href="/about">Term of Service</a>
                            <a className="foota" href="/about">Privacy Policy</a>
                            <a className="foota" href="/about">Community Guidelines</a>
                            <a className="foota" href="/about">Refund Policy</a>
                        </div>
                    </div>
                    <div className="footline">
                        <img className="linefoot" src="./Arrow 2.png" alt="..."></img>
                    </div>
                    <div className="footsidemain">
                        <a className="footside" href="sitecrafters.tech">All rights reserved. Sitecrafters LTD.</a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default ContactPage;