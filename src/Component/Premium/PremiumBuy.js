// Import the CSS for this specific page into the main React page for use.
import './PremiumBuy.css';
import React from 'react';
import { Fragment } from 'react';

// Define the PremiumBuy component
const PremiumBuy = () => {
    return (
        // JSX for adding the premium page content into the React page
        <Fragment>
            <div className="desktop-3">
                <div className='logo'>
                    <img src='/loo.png' alt='...' />
                    <div className='circle'></div>
                </div>
                <div className='title'>
                    <p>We Make chat affordable with special one</p>
                    <a href='/premium' className='p2'>Pricing Plan for every budget</a>
                </div>
                <div className='radiocheck'>
					<label className='labelmain'>Choose Plan</label><br></br><br></br>
                    <label>
                        <input type='radio' name='billing' /><b> Yearly Billing</b>
                    </label>
					<br></br><br></br>
                    <label>
                        <input type='radio' name='billing' /> <b>Month Billing</b>
                    </label>
					<div className='imgboy'>
						<img src='/Boy.png' alt='...'></img>
					</div>
                </div>
            </div>
        </Fragment>
    );
};

export default PremiumBuy;
