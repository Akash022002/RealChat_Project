import React, { Fragment, useState } from "react";
import './PopUp.css';
import Payment from "../Payment/Payment";

function PopPayment() {
    return (
        <div className="popup11">
            <Payment/>
        </div>
    );
}

const PopUp = (props) => {
    const [showPayment, setPayment] = useState(false);

    // Function to toggle the payment popup
    const togglePayment = () => {
        // Toggle the state of showPayment
        setPayment(!showPayment);
    }

    return (
        <Fragment>
            {showPayment && <PopPayment />}
            <div className="popupmain">
                <div className="frame">
                    <div className="div">
                        <div className="overlap">
                            <img className="crown" alt="Crown" src="https://c.animaapp.com/9A1k6Als/img/crown-1.gif" />
                            <div className="text-wrapper">Premium</div>
                            <a className="closea" href="/userchat"><img className="closebutton" src="./close.png"></img></a>
                        </div>
                        <img className="arrow" alt="Arrow" src="https://c.animaapp.com/9A1k6Als/img/arrow-1.svg" />
                        <div className="text-wrapper-2">Pick a plan</div>
                        <p className="p">Choose what works best for you</p>
                        <div className="overlap-group">
                            <div className="div-wrapper">
                                <div className="text-wrapper-3">Monthly</div>
                            </div>
                            <img
                                className="rating-star"
                                alt="Rating star"
                                src="https://c.animaapp.com/9A1k6Als/img/rating-star-1@2x.png"
                            />
                            <div className="overlap-2">
                                <div className="text-wrapper-4">16% off</div>
                            </div>
                        </div>
                        <div className="overlap-3">
                            <div className="rectangle">
                                <img className="img" alt="Arrow" src="https://c.animaapp.com/9A1k6Als/img/arrow-3.svg" />
                                <div className="text-wrapper-5">Basic Plan</div>
                                <div className="text-wrapper-6">$4.99</div>
                                <div className="text-wrapper-7">/ Month</div>
                                <div className="text-wrapper-8">Billed monthly</div>
                                {/* Add onClick to trigger the togglePayment function */}
                                <button onClick={togglePayment} className="overlap-new">
                                    <button className="text-wrapper-15">Subscribe</button>
                                </button>
                                <a href="/popup" className="switch-to-yearly">Switch to yearly plan &amp; save up to 16%</a>
                                <img className="arrow-2" alt="Arrow" src="https://c.animaapp.com/9A1k6Als/img/arrow-3.svg" />
                                <div className="text-wrapper-10">What’s included?</div>
                                <img className="rectangle-3" alt="Rectangle" src="https://c.animaapp.com/9A1k6Als/img/rectangle-58@2x.png" />
                            </div>
                        </div>
                        <div className="overlap-group-2">
                            <div className="overlap-4">
                                <div className="overlap-5">
                                    <img className="arrow-3" alt="Arrow" src="https://c.animaapp.com/9A1k6Als/img/arrow-3.svg" />
                                    <div className="text-wrapper-11">What’s included?</div>
                                </div>
                                <img
                                    className="rectangle-4"
                                    alt="Rectangle"
                                    src="https://c.animaapp.com/9A1k6Als/img/rectangle-58@2x.png"
                                />
                            </div>
                            <div className="text-wrapper-12">$9.99</div>
                            <div className="text-wrapper-13">/ Month</div>
                            <div className="text-wrapper-14">Billed monthly</div>
                            <div className="overlap-6">
                                <button className="text-wrapper-15">Subscribe</button>
                            </div>
                            <a href="/popup" className="switch-to-yearly-2">Switch to yearly plan &amp; save up to 16%</a>
                            <img className="arrow-4" alt="Arrow" src="https://c.animaapp.com/9A1k6Als/img/arrow-3.svg" />
                            <div className="text-wrapper-16">Plus Plan</div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default PopUp;
