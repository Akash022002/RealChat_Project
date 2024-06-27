import React from "react";
import { Fragment } from "react";
import './Setting.css';

const Setting =()=>{
    return(
        <Fragment>
            <div className="MainSet">
                <div className='main-container'>
                    <div className='section'>
                        <span className='text'>Settings</span>
                        <div className='img' />
                    </div>
                    <div className='wrapper'>
                        <div className='box'>
                            <span className='text-2'>Profile</span>
                            <div className='img-2' />
                        </div>
                        <span className='text-3'>Avatar</span>
                    </div>
                    <div className='group'>
                        <img src="chat.png" alt="..." className='img-3' />
                        <div className='wrapper-2'>
                            <div className='box-2'>
                                <span className='text-4'>Change</span>
                            </div>
                            <div className='box-2new'>
                            <span className='text-6'>Remove</span>
                            </div>
                        </div>
                        <div className='wrapper-3'>
                            <span className='text-7'>Account</span>
                            <div className='img-4' />
                        </div>
                    </div>
                    <span className='text-8'>
                        Avatars are reviewed before displaying. Do not upload inappropriate
                        avatars. Limit: 3 changes daily. Max 8MB.
                        <br />
                    </span>
                    <div className='group-2'>
                        <div className='box-3'>
                            <span className='text-9'> Privacy</span>
                            <div className='img-5' />
                        </div>
                        <div className='pic' />
                    </div>
                    <div className='group-3'>
                        <div className='group-4'>
                            <span className='text-a'>Preferences </span>
                            <div className='img-6' />
                        </div>
                        <span className='text-b'> UserName</span>
                        <div className='group-5'>
                            <span className='text-c'> Edit</span>
                        </div>
                        <span className='text-d'>Akash</span>
                    </div>
                    <div className='section-2'>
                        <span className='text-e'>You have 2 name changes left for today.</span>
                        <div className='img-7' />
                    </div>
                    <div className='box-4'>
                        <span className='text-f'>
                            INTERESTS (ON)
                            <br />
                        </span>
                        <div className='section-3'>
                            <span className='text-10'> Edit</span>
                        </div>
                    </div>
                    <span className='text-11'>You have 0 interests</span>
                    <div className='box-5'>
                        <span className='text-12'>Learn More</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Setting;