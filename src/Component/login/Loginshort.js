// Code for add the logini short page for add the new pop login page for the main login window
import React from "react";
import { Fragment } from "react";
import './Loginshort.css';

const Loginshort = (props)=>{
    return(
        <Fragment>
            <div className="loginmain">
            <div className="header-frame">
                <div className="mainframe">
                <section className="subheader-frame">
                    <div className="main-frame">
                    <div className="untitled-1-copy-1-parent">
                        <img
                        className="untitled-1-copy-1"
                        style={{top:"2px",left:"6px"}}
                        loading="lazy"
                        alt=""
                        src="/untitled1-copy-1@2x.png"
                        />
                        <div className="screenshot-rectangle">
                        <img
                            className="screenshot-463-2"
                            loading="lazy"
                            alt=""
                            src="/screenshot-463-2@2x.png"
                        />
                        </div>
                    </div>
                    <div className="frame-facebook">
                        <h2 className="claim-account">Claim Account</h2>
                    </div>
                    <div className="before-subscription">
                        <i className="before-you-subscribe">
                        Before you subscribe to premium, you need to claim your account
                        </i>
                    </div>
                    </div>
                    <div className="continue-with-facebook">
                    <a href="/" className="arrow-frame">
                        <button className="or-separator">
                        <div className="or-separator-child" />
                        <img className="pngwing-1-icon" alt="" src="/pngwing-1@2x.png" />
                        <i className="continue-with-google">{`Continue with google `}</i>
                        </button>
                        <a href="/" className="or-separator1">
                        <div className="or-separator-item" />
                        <img className="pngwing-2-icon" alt="" src="/pngwing-2@2x.png" />
                        <i className="continue-with-facebook1">{`Continue with Facebook `}</i>
                        </a>
                    </a>
                    </div>
                </section>
                <div className="parent-frame-wrapper">
                    <div className="parent-frame">
                    <div className="parent-frame-inner">
                        <img style={{width:"150px",height:"90px"}}
                        className="frame-child"
                        loading="lazy"
                        alt=""
                        src="/arrow-6.svg"
                        />
                    </div>
                    <i className="or">or</i>
                    <div className="parent-frame-inner">
                        <img style={{width:"150px",height:"90px"}}
                        className="frame-child"
                        loading="lazy"
                        alt=""
                        src="/arrow-6.svg"
                        />
                    </div>
                    </div>
                </div>
                <a href="/" className="email-frame">
                    <button className="subscribe-btn">
                    <div className="subscribe-btn-child" />
                    <img className="pngwing-3-icon" alt="" src="/pngwing-3@2x.png" />
                    <i className="continue-with-email">{`Continue with Email `}</i>
                    </button>
                </a>
                </div>
            </div>
            </div>
        </Fragment>
    )
}
export default Loginshort;