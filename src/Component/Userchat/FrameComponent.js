import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <div className="rectangle-parent4">
      <div className="frame-child11" />
      <div className="icons8-photo-96-1-parent">
        <img
          className="icons8-photo-96-1"
          loading="lazy"
          alt=""
          src="/icons8photo96-1@2x.png"
        />
        <div className="send-a-message-wrapper">
          <i className="send-a-message">Send a message</i>
        </div>
      </div>
      <div className="frame-container">
        <div className="icons8-smiling-100-1-parent">
          <img
            className="icons8-smiling-100-1"
            alt=""
            src="/icons8smiling100-1@2x.png"
          />
          <img className="rectangle-icon" alt="" src="/rectangle-13@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
