import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="slogon">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          alt=""
        />
        <h2>Connect with friends and the world around you on Facebook.</h2>
      </div>
      <div className="login-container">
        <form>
          <input type="text" placeholder="Email or Phone Number" />
          <input type="password" placeholder="Password" />
          <button>Log In</button>
        </form>
        <button className="link-button btn-forgotPwd">Forgot Password?</button>
        <hr className="divider" />
        <button className="btn-createAccount">Create New Account</button>
      </div>
    </div>
  );
}

export default Login;
