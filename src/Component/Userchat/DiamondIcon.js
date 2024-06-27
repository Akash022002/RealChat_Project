import "./DiamondIcon.css";
import React from "react";
//import { Fragment } from "react";

const DiamondIcon = (props) => {
  return (
    <div className="diamond-icon">
      <div className="diamond-icon-child" />
      <div className="untitled-copy-wrapper">
        <div className="untitled-copy">
          <div className="email-icon">
            <img
              className="untitled-1-copy-1"
              loading="lazy"
              alt=""
              src="/untitled1-copy-1@2x.png"
            />
          </div>
          <div className="friends-list">
            <div className="frame-div">
              <div className="frame-child7" />
              <button className="icon-friends">
                <div className="icon-friends-child" />
                <img
                  className="icons8-email-64-1"
                  alt=""
                  src="/icons8email64-1@2x.png"
                />
                <i className="chat">Chat</i>
              </button>
              <div className="get-premium-wrapper">
                <div className="get-premium">
                  <img
                    className="icons8-friends-96-1"
                    loading="lazy"
                    alt=""
                    src="/icons8friends96-1@2x.png"
                  />
                  <div className="crown-icon">
                    <h3 className="friends">Friends</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="escape-key-symbol-wrapper">
              <div className="escape-key-symbol">
                <div className="escape-key-symbol-child" />
                <img
                  className="icons8-chat-100-1"
                  alt=""
                  src="/icons8chat100-1@2x.png"
                />
                <div className="photo-icon">
                  <i className="new-chat1">New Chat</i>
                </div>
              </div>
            </div>
            <div className="smiling-icon">
              <div className="hello-help">
                <div className="direct-messages-wrapper">
                  <i className="direct-messages">DIRECT MESSAGES</i>
                </div>
                <img
                  className="hello-help-child"
                  loading="lazy"
                  alt=""
                  src="/arrow-1.svg"
                />
                <div className="message-container">
                  <img
                    className="message-container-child"
                    loading="lazy"
                    alt=""
                    src="/arrow-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="input-message-area">
        <div className="send-button">
          <div className="photo-send-button">
            <img
              className="hugo-mailbox-1-1"
              loading="lazy"
              alt=""
              src="/hugomailbox-1-1@2x.png"
            />
          </div>
          <i className="look-like-you">
            Look like you are the popular one here. no message yet!
          </i>
        </div>
      </div>
      <div className="ellipsis-symbol">
        <div className="ellipsis-symbol-child" />
        <div className="exit-message">
          <div className="chat-settings-wrapper">
            <div className="chat-settings">
              <div className="chat-settings-child" />
              <div className="unlock-chat-filters-send-and-wrapper">
                <i className="unlock-chat-filters">
                  Unlock chat filters, Send and recieved images and videos and
                  more!
                </i>
              </div>
              <button className="rectangle-parent3">
                <div className="frame-child8" />
                <i className="get-premium1">Get Premium</i>
              </button>
            </div>
          </div>
          <img className="exit-message-child" alt="" src="/arrow-3.svg" />
        </div>
        <img
          className="icons8-crown-1"
          loading="lazy"
          alt=""
          src="/icons8crown-1@2x.png"
        />
        <div className="ellipsis-symbol-inner">
          <div className="frame-parent">
            <div className="frame-group">
              <div className="ellipse-parent1">
                <img
                  className="frame-child9"
                  loading="lazy"
                  alt=""
                  src="/ellipse-1@2x.png"
                />
                <div className="frame-child10" />
              </div>
              <div className="dank-help-parent">
                <i className="dank-help">dank help...</i>
                <div className="free-wrapper">
                  <i className="free">Free</i>
                </div>
              </div>
            </div>
            <div className="frame-wrapper">
              <div className="icons8-setting-128-1-parent">
                <img
                  className="icons8-setting-128-1"
                  loading="lazy"
                  alt=""
                  src="/icons8setting128-1@2x.png"
                />
                <img
                  className="icons8-ellipsis-100-1"
                  loading="lazy"
                  alt=""
                  src="/icons8ellipsis100-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiamondIcon;
