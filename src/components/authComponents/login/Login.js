import React from "react";
import facebook from "../../../styles/gallery/icons/facebook.svg";
import google from "../../../styles/gallery/icons/google.svg";
function Login(props) {
  return (
    <div className="form-container">
      <h2>Log in</h2>
      <div className="form-wrapper">
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Log in</button>
        </form>
        <p className="toggle-form" onClick={props.toggle}>
          Don't have an account? <strong>Sign up!</strong>
        </p>
        <div className="devider">
          <div className="left-devider"></div>
          <span>or</span>
          <div className="right-devider"></div>
        </div>
        <div className="social-media-options">
          <div className="social-media-option">
            <img src={facebook} />
          </div>
          <div className="social-media-option">
            <img src={google} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
