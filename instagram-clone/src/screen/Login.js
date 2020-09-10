import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="signup">
      <div className="signup-container">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          className="signup-logo"
          alt="Instagram"
        />
        <div>
          <form className="signup-form">
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <button className="signup-button" disabled>
              Log In
            </button>
          </form>
        </div>
        <hr className="divider" />
        <div className="login-with-google">
          <button className="login-button">
            <span>G</span>Login in with Google
          </button>
        </div>
      </div>
      <div className="have-account">
        <span>Dont`t have ave an account?&nbsp;</span>
        <Link to="/signup">
          <button className="link-button">Sign up</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
