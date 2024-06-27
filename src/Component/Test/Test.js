import React, { useState } from 'react';

const Test = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleLogin = (e) => {
    // Handle login logic here
    e.preventDefault();
    console.log('Logging in...');
  };

  return (
    <div>
      <button onClick={togglePopup}>Open Login Popup</button>
      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <label>
                Username:
                <input type="text" />
              </label>
              <label>
                Password:
                <input type="password" />
              </label>
              <button type="submit">Login</button>
            </form>
            <button onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Test;
