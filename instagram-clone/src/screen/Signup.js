import React from "react";
import "./Signup.css";

function Signup() {
  return (
    <div className="signup">
      <div className="signup-container">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          className="signup-logo"
          alt="Instagram"
        />
        <h2>Sign up to see photos and videos from your friends.</h2>
        <div className="signup-with-google">
          <button className="signup-button">
            <span>G</span>
            Sign up with Google
          </button>
        </div>
        <hr className="divider" />
        <div>
          <form className="signup-form">
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <button className="signup-button" disabled>
              Sign up
            </button>
          </form>
          <div className="policy">
            <span>By signing up, you agree to our</span>
            <h3>Terms, Data Policy and Cookies Policy.</h3>
          </div>
        </div>
      </div>
      <div className="have-account">
        <span>Have an account?&nbsp;</span>
        <button className="link-button">Log in</button>
      </div>
    </div>
  );
}

export default Signup;
