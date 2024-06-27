import { Fragment } from "react"

const About =()=>{
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
                        <a href="/about"><img className="avatar" src="./avatar.png" alt="..."></img></a>
                    </div>
                    <div className="abouttext">
                        <p>Our Story</p>
                    </div>
                    <div className="aboutbottom">
                        <p>In today’s fast-paced world, it can be challenging to meet new people. That’s why we created Chitchat.gg - to make it easier for people to connect with each other. Our platform allows you to chat with people from all over the world, so you can expand your social circle and make meaningful connections. In addition, our platform offers loads of features and tools to make your chatting experience more enjoyable and interactive. Join us today and start exploring a whole new world of socializing!</p>
                    </div>
                </div>
                <div className="footersec">
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
export default About;
