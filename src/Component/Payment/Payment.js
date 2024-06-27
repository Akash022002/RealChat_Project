//Code for main payment page 
import React from "react";
import { Fragment } from "react";
import './Payment.css';

const Payment=(props)=>{
    return(
        <Fragment>
    		<div className="monthly-basic-parent">
                <a href="/popup"><img className="closepayment" src="./close.png"></img></a>
      			<i className="monthly-basic">Monthly Basic</i>
      			<div className="frame-child" />
      			<div className="frame-item" />
      			<i className="i">$4.99</i>
      			<div className="frame-inner" />
      			<img className="arrow-icon" alt="" src="Arrow 9.svg" />
      			<i className="billed-every-month">$4.99 billed every month</i>
      			<i className="annual-basic">Annual Basic</i>
      			<div className="ellipse-div" />
      			<div className="frame-child1" />
      			<i className="i1">$49.99</i>
      			<div className="frame-inner11" />
      			<img className="frame-child2" alt="" src="Arrow 10.svg" />
      			<i className="billed-every-month1">$4.99 billed every month</i>
      			<i className="save-16">Save 16%</i>
      			<div className="frame-child3" />
      			<div className="frame-child4" />
      			<i className="billing-details">Billing Details</i>
      			<i className="payment-options">Payment Options</i>
      			<i className="email-address">Email address</i>
      			<div className="frame-child5" />
      			<i className="eg-johnexamplecom">e.g. john@example.com</i>
      			<i className="username11">Username</i>
      			<div className="frame-child6" />
      			<i className="eg-john-more">e.g. john more dong</i>
      			<i className="tax-id-number">Tax ID number</i>
      			<div className="frame-child7" />
      			<i className="eg-nhkgk2151nh">e.g. NHKGK2151NH</i>
      			<i className="billing-address">Billing address</i>
      			<div className="frame-child8" />
      			<i className="eg-sn-35-3">e.g. SN 35-3 street road</i>
      			<i className="optional">(optional)</i>
      			<div className="frame-child9" />
      			<a href="/" className="submit">{`Submit `}</a>
      			<i className="premium-basic">Premium Basic</i>
      			<i className="you-will-be">** You will be charged $4.99 now, then $4.99 every month.</i>
      			<div className="frame-child10" />
      			<img className="screenshot-468-2" alt="" src="Screenshot (468) 2.png" />
      			<img className="logo-sitecrafters-removebg-pre-icon" alt="" src="logo_sitecrafters-removebg-preview 1.png" />
      			<i className="powered-by-sitecrafters">Powered by Sitecrafters</i>
      			<i className="terms">Terms</i>
      			<i className="privacy">Privacy</i>
      			<div className="frame-child11" />
      			<div className="frame-child12" />
      			<img className="untitled-1-copy-1" alt="" src="Untitled-1 copy 1.png" />
    		</div>

        </Fragment>
    )
}
export default Payment;