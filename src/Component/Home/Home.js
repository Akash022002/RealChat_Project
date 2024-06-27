import React from "react";
import { Fragment } from "react";
import './Home.css';
import UserChat from "../Userchat/Userchat";
import Login from "../login/Login";

function LoginLoad() {
    return (
        <Login></Login>
    )
}

const Home = (props) => {
    const chatShow = () => {
        return <UserChat />;
    };
    return (
        <Fragment>
            <div>
                <div className="homemain">
                    <div className="desktop-2">
                        <img className="backg01-1-icon" alt="" src="/backg01-1@2x.png" />
                        <div className="backg01-2" />
                        <div className="backg01-3" />
                        <img className="backg01-5-icon" alt="" src="/add.png" />
                        <div className="mainimg">
                            <img className="backg01-4-icon" alt="" src="/new1.png" />
                        </div>
                        <div className="fast-familiar">{`Fast & Familiar`}</div>
                        <div className="a-fast-and-container">
                            <p className="a-fast-and">{`A fast and lightweight chat app, with a `}</p>
                            <p className="a-fast-and">{`design similar to popular platforms like `}</p>
                            <p className="a-fast-and">Discord</p>
                        </div>
                        <div className="add-friends">Add Friends</div>
                        <div className="talk-to-online-container">
                            <p className="a-fast-and">
                                Talk to online strangers who love what you lova, Chat about
                            </p>
                            <p className="a-fast-and">
                                hobbies and enjoy fun conversation-all from one place! Making
                            </p>
                            <p className="a-fast-and">{`new friends based on interests `}</p>
                            <p className="a-fast-and">is made easy.</p>
                        </div>
                        <i className="say-goodbye-to">Say goodbye to pesky bots and spam</i>
                        <div>
                            <div className="spam-and-bot">Spam and </div>
                            <div className="spam-and-bot2">Bot free</div>
                            <div className="spam-and-bot3">chatrooms</div>
                        </div>

                        <div className="unlike-some-other-container">
                            <p className="a-fast-and">
                                Unlike some other websites , we actually care about your chat
                            </p>
                            <p className="a-fast-and">
                                experience and take the necessary steps to keep the bots at bay.
                            </p>
                            <p className="a-fast-and">{`So come on in, the `}</p>
                            <p className="a-fast-and">conversation’s lovely and bot-free!</p>
                        </div>
                        <div className="chat-with-random">Chat with Random Strangers With</div>
                        <i className="strengers-turned-friends">Strengers turned friends</i>
                        <div className="desktop-2-child" />
                        <div className="desktop-2-item" />
                        <div className="navbar">
                            <a className="a2" href="/">Home</a>
                            <a className="a1" href="/blog">Blog</a>
                            <a className="a1" href="/about">About</a>
                            <a className="a1" href="/contact">Contact</a>
                            <a className="a1" href="/"><img className="searchimg" src="./search.png" alt="Search" /></a>
                        </div>


                        <a href="/login" className="log-innew">Log in</a>

                        <div className="talk-to-strangers">Talk To Strangers</div>
                        <div className="make-friends">Make Friends.!</div>
                        <div className="experience-an-exciting-container">
                            <p className="a-fast-and">{`Experience an exciting free random chat alternative to find friends, connect with strangers, and `}</p>
                            <p className="talk-with-different">
                                {" "}
                                talk with different people in random anonymous chat rooms. No
                                registration required.
                            </p>
                        </div>
                        <div className="desktop-2-child1" />
                        <div className="anonymous-chat-meet">Anonymous Chat, meet new people</div>
                        <div className="find-female-and-container">
                            <p className="a-fast-and">
                                Find female and male strengers worldwide, the new modern omegle
                                alternative.
                            </p>
                        </div>
                        <img
                            className="features-03-image-02-icon"
                            alt=""
                            src="/features03image02@2x.png"
                        />
                        <img
                            className="features-03-image-03-icon"
                            alt=""
                            src="/features03image03@2x.png"
                        />
                        <img
                            className="features-03-image-01-icon"
                            alt=""
                            src="/features03image01@2x.png"
                        />
                        <i className="friends-at-your">Friends at your fingertips</i>

                        <div>
                            <div className="from-strangers-to-friends">From Strangers to</div>
                            <div className="from-strangers-to-friends2"> Friends</div>
                        </div>

                        <div className="turn-random-online-container">
                            <p className="a-fast-and">
                                Turn random online chats with strangers into lasting
                            </p>
                            <p className="a-fast-and">
                                {" "}
                                friendships, our features makes it easy to add
                            </p>
                            <p className="a-fast-and">{` someone you've hit it off with and catch up on past `}</p>
                            <p className="a-fast-and">conversations.</p>
                        </div>
                        <div className="th-best-site">
                            Th best site to Chat with Male and Female Strangers.
                        </div>
                        <div className="many-available-chat-container">
                            <p className="a-fast-and">{`Many available chat apps offer various features for meeting random strangers or `}</p>
                            <p className="a-fast-and">
                                chatting without bots, but not all of them are modern, secure and
                                feature rich with a
                            </p>
                            <p className="a-fast-and">
                                {" "}
                                diverse interesting people from around the world.
                            </p>
                        </div>
                        <img className="backg01-4-icon" alt="" src="/static01-1@2x.png" />
                        <div className="dont-take-our">Don't take our word for it</div>
                        <div className="weve-asked-random">
                            We've asked random strangers both boys and girls to try our platform and
                            this is what
                        </div>
                        <div className="they-had-to">they had to say</div>
                        <div className="backg01-6-icon" alt="" style={{ backgroundColor: "#1a1919" }} />

                        <div className="linefoot123">
                            <p></p>
                        </div>
                        <div className="chatimg">
                            <img src="./chat.png" alt="Chat" />
                        </div>
                        <div className="desktop-2-child2" />
                        <div className="desktop-2-child3" >
                            <a href="/contact" className="contacthome">Contact Us</a>
                        </div>
                        <div className="stay-in-the">Stay in the loop</div>
                        <div className="join-our-discord">
                            Join our Discord Server to get updates before anyone else.
                        </div>

                        <div className="desktop-2-child4" />
                        <a href="/register" className="join-discord">Join Discord</a>

                        <div className="desktop-2-child5" />
                        <div className="bottom">
                            <img alt="..." src="/loo.png" />
                        </div>
                        <div className="all-rights-reserved">
                            All rights reserved. SiteCraftersLTD.
                        </div>

                        <div className="connect-with-real">
                            Connect with real people, enjoy ad free chats, and build genuine
                            relationships.
                        </div>

                        <div>
                            <div className="similar-interests"> Similar</div>
                            <div className="similar-interests2"> Interest</div>
                        </div>

                        <a className="reach-people-like">Reach people like you</a>
                        <img
                            className="untitled-1-copy-1"
                            alt=""
                            src="/untitled1-copy-1@2x.png"
                        />
                        <div className="linefoot">
                            <p></p>
                        </div>
                        <img className="newlogo-1-icon" alt="" src="/newlogo.png" />
                        <button className="desktop-2-child6"></button>
                        <a href="/userchat" className="start-chatting">Start Chatting</a>
                        <img className="banner-1-icon" alt="" src="/banner-1@2x.png" />
                        <a href="/contact"><img
                            className="image-search-1709566560701-1-icon"
                            alt=""
                            src="/image-search-1709566560701-1@2x.png"
                        /></a>
                        <div className="desktop-2-child7" />
                    </div>

                </div>
            </div>
        </Fragment>
    )
}
export default Home;
