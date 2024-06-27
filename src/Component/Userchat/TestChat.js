import React, { Fragment, useState } from "react";
//import './Userchat.css';
import PrePopUp from "../PremiumPOPUP/PrePopUp";
import UserPop from "./UserPop";
import Payment from "../Payment/Payment";
import './TextChat.css';
 
import Interest from "../ManageInterest/Interest";


// Function for showing the popup when the button is clicked
function Popup() {
    return (
        <div className="popup">
            <UserPop />
        </div>
    );
}

// Function for adding the payment popup into the main chat page 


const TextChat = (props) => {

    // Code for add the popup for show setting page 
    const [showPopupSet, setShowPopupSet] = useState(false);

  const togglePopupSet = () => {
    setShowPopupSet(!showPopupSet);
  };
  //End of code Setitng popup page

  const handleLogin = (e) => {
    // Handle login logic here
    e.preventDefault();
    console.log('Logging in...');
  };

    const [showPopup, setShowPopup] = useState(false);
    // Function to toggle the username edit popup for the chat page
    const togglePopuNnew = () => {
        setShowPopup(!showPopup);
    };

    const [showPayment, setPayment] = useState(false);
    // Function to toggle the payment popup
    const togglePayment = () => {
        // Toggle the state of showPayment
        setPayment(!showPayment);
    }

    const togglePopup = () => {
        <PrePopUp></PrePopUp>
    };
    //Code for apply the image upload when the click on image
    const handleImageUpload = () => {
        const imageInput = document.getElementById('imageInput');
        imageInput.click();
    };

    return (
        <Fragment>
            <div className="desktop-1">
                {showPopup && <Popup />}
                
            <div>
                    <div className="desktop-1-child" >
                    <a href="/"><img className="logonew1" src="./newlogo.png" alt="logo.png"/></a>
                    <div className="insidelogo">
                        <img className="logonew" src="Arrow 2.png" alt="..."></img>
                        <a href="/" className="chatbutton"><img className="chatimg1" src="chat1.png" alt="..."></img></a>
                        <a href="/" className="chatbutton"><img className="chatimg1" src="noti.png" alt="..."></img></a>
                        <a href="/loginshort" className="chatbutton"><img className="chatimg1" src="login.png" alt="..."></img></a>
                    </div>
                    </div>
                    <div className="desktop-1-item" >
                    </div>
                    <div className="desktop-1-inner" />
                    <img className="untitled-1-copy-1" alt="" src="Untitled-1 copy 1.png" />
                    <div className="rectangle-div1new" />
                    <div className="desktop-1-child1" />
                    <i className="friends">Friends</i>
                    <div className="desktop-1-child2" />
                    <i className="chat">Chat</i>
                    <img className="icons8-email-64-1" alt="" src="icons8-email-64 1.png" />
                    <img className="icons8-friends-96-1" alt="" src="icons8-friends-96 1.png" />
                    <img className="icons8-chat-100-1" alt="" src="icons8-chat-100 1.png" />
                    <a href="/" className="new-chat">New Chat</a>
                     
                    <a href="/" className="new-chat1">New Chat</a>
                    <div className="direct">
                        <i className="direct-messages">DIRECT MESSAGES</i>
                        <img className="arrow-iconnew" alt="" src="Arrow 1.svg" />
                        <img className="arrow-icon1" alt="" src="Arrow 1.svg" />
                    </div>
                    <img className="hugo-mailbox-1-1" alt="" src="hugo-mailbox (1) 1.png" />
                    <i className="look-like-you">Look like you are the popular one here. no message yet!</i>
                    <div className="desktop-1-child4" >
                        <img className="arrownew" src="Arrow 2.png" alt="..."></img>
                    </div>
                    <i className="free">Free</i>
                    <img className="desktop-1-child5" alt="" src="Arrow 3.svg" />
                    <div className="desktop-1-child6" />
                    <img className="icons8-crown-1" alt="" src="icons8-crown 1.png" />
                    <i className="unlock-chat-filters">Unlock chat filters, Send and recieved images and videos and more!</i>
                    <button onClick={togglePayment} className="desktop-1-child7"></button>
                    <a href="/popup" className="get-premium">Get Premium</a>
                    <img className="ellipse-icon" alt="" src="Ellipse 1.png" />
                    <div className="ellipse-div" />
                    <i className="dank-help">dank help...</i>
                    <a href="/userchat/settings"><img className="icons8-setting-128-1" alt="" src="icons8-setting-128 1.png" /></a>
                    {showPopupSet && <Interest></Interest>}
                    <a href="/"><img className="icons8-ellipsis-100-1" alt="" src="icons8-ellipsis-100 1.png" /></a>
                    <input className="desktop-1-child8" />
                    <div className="desktop-1-child9" />
                    <button href="/" className="desktop-1-child10" />
                    <i className="esc">ESC</i>
                    <a href="/" className="start">START</a>

                    <a onClick={handleImageUpload} id="uploadLink">
                        <img className="icons8-photo-96-1" alt="" src="icons8-photo-96 1.png" />
                    </a>
                    <input type="file" id="imageInput" accept="image/*" style={{display: 'none'}} />

                    <div className="chatload">
                        <p></p>
                    </div>

                    <a href="/"><img className="icons8-smiling-100-1" alt="" src="icons8-smiling-100 1.png" /></a>
                    <a href="/"><img className="rectangle-icon" alt="" src="Rectangle 13.png" /></a>
                    <div className="group-div">
                            <div className="hello-dank-help-parent1">
                                <i className="hello-dank-help">Hello, dank help...</i>
                                <img className="screenshot-2024-03-04-160431-1" alt="" src="Screenshot 2024-03-04 160431 1.png" />
                            </div>
                    </div>
                    <i className="have-fun-chatting-be-container">
                            <span className="have-fun-chatting-be">Have fun chatting, be respectful and follow our</span>
                            <span className="span"> </span>
                            <a className="chat-rules" href="/" target="_blank" rel="noreferrer">
                                <span className="chat-rules1">chat rules</span>
                            </a>
                    </i>
                    <button className="rectangle-parent">
                            <div className="group-child" />
                            <div className="group-item1" />
                            <img className="icons8-chat-100-32" alt="" src="icons8-chat-100 3.png" />
                            <a href="/" className="video-chat1">Video Chat</a>
                            <img className="icons8-less-than-96-2" alt="" src="icons8-less-than-96 2.png" />
                    </button>
                    <button className="rectangle-group1">
                            <div className="group-child" />
                            <div className="group-item11" />
                            <img className="icons8-chat-100-31" alt="" src="icons8-chat-100 2.png" />
                            <a href="/" className="video-chat">Text Chat</a>
                            <img className="icons8-less-than-96-21" alt="" src="icons8-less-than-96 1.png" />
                    </button>

                </div>
    		</div>
        </Fragment>
    )
}

export default TextChat;