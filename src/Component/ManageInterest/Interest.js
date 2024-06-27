import React from "react";
import { Fragment } from "react";
import './Interest.css';

const Interest =(props)=>{
    return(
        <Fragment>
            <div className="mainint">
                <div className="manage-interests-parent">
                    <i className="manage-interests">Manage Interests</i>
                    <img className="closeimg1" src="./popupback.png" alt="..."></img>
                    <i className="add-and-remove">Add and remove interests to help us find better matches for you.</i>
                    <div className="frame-childint" />
                    <div className="match">
                        <i className="match-with-interests">Match with interests</i>
                    </div>
                    <div className="frame-item" />
                    <div className="frame-inner" />
                    <div className="rectangle-div" />
                    <div className="frame-child1" />
                    <i className="add-an-interest">Add an interest...</i>
                    {/*<i className="trending">Trending</i>
                    <img className="trending-1-icon" alt="" src="trending 11.png" />
                    <div className="rectangle-parent">
                            <div className="group-child" />
                            <img className="icons8-trending-96-1" alt="" src="icons8-trending-96 11.png" />
                            <i className="bored">Bored</i>
                    </div>
                    <div className="rectangle-group">
                            <div className="group-child" />
                            <img className="icons8-trending-96-1" alt="" src="icons8-trending-96 11.png" />
                            <i className="bored">
                                <p className="gaming1">Gaming</p>
                            </i>
                    </div>*/}
                     
                    <div>
                        <img className="flagimg" src="show.png" alt="..."></img>
                    </div>
                    {/*<div className="rectangle-container">
                            <div className="group-child" />
                            <img className="icons8-trending-96-1" alt="" src="icons8-trending-96 11.png" />
                            <i className="bored">Fun</i>
                    </div>
                    <div className="group-div">
                            <div className="group-child" />
                            <img className="icons8-trending-96-1" alt="" src="icons8-trending-96 11.png" />
                            <i className="bored">Friends</i>
                </div>*/}
                    <div className="chatinterst">
                        <i className="interestchat">Add you interest for make chat more interesting</i>
                    </div>
                    <div className="frame-child2" />
                    <div className="rectangle-parent1">
                            <div className="group-child2new1" />
                            <i className="forevernew">Forever</i>
                    </div>
                    <div className="rectangle-parent2">
                            <div className="group-child2new" />
                            <i className="minnew">1 Min</i>
                    </div>
                    <div className="rectangle-parent3">
                            <div className="group-child4" />
                            <i className="sec">30 Sec</i>
                    </div>
                    <div className="rectangle-parent4">
                            <div className="group-child4" />
                            <i className="forever">10 Sec</i>
                    </div>
                    <i className="max-wait-duration">Max Wait Duration</i>
                    <img className="icons8-question-mark-100-1-1" alt="" src="icons8-question-mark-100 (1) 11.png" />
                    <div className="rectangle-parent5new">
                            <div className="group-child2" />
                            <i className="min">5 Sec</i>
                    </div>
                    <div className="frame-child3" />
                    <i className="done">Done</i>
                </div>
            </div>
        </Fragment>
    )
}
export default Interest;