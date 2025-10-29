import React, { useState } from 'react';
import './LoginPopup.css';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <button
            type="button"
            className="close-btn"
            onClick={() => setShowLogin(false)}
          >
            ✖
          </button>
        </div>

        <div className="login-popup-inputs">
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          {currState === "Sign Up" && (
            <input type="password" placeholder="Confirm Password" required />
          )}
        </div>

        <button type="submit" className="submit-btn">
          {currState}
        </button>

        <p className="toggle-text">
          {currState === "Sign Up" ? (
            <>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></>
          ) : (
            <>Don't have an account? <span onClick={() => setCurrState("Sign Up")}>Sign up here</span></>
          )}
        </p>
      </form>
    </div>
  );
};

export default LoginPopup;
