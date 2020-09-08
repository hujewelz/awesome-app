import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <img
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
        className="login-logo"
        alt="Instagram"
      />
      <div className="login-form">
        <form>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <button className="login-button">Sign In</button>
        </form>
        <p>
          Need a account?&nbsp;
          <Link to="/signup">
            <button className="link-button">Sign up now!</button>
          </Link>
        </p>
      </div>
      <hr className="divider" />
      <div className="login-with-google">
        <button className="login-button">Sign in with Google</button>
      </div>
    </div>
  );
}

export default Login;
