import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signupEnabled, setSignupEnabled] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        //update user profile
        // user.updateProfile({ displayName: username, fullName: fullName });
        console.log("user: ", JSON.stringify(user));
      }
    });
  }, [username, fullName]);

  const signup = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("sign up success");
      })
      .catch((error) => prompt(error));
  };

  const handleInput = (e) => {
    const type = e.target.id;
    const input = e.target.value.trim();
    setSignupEnabled(email && fullName && username && password);
    if (!input) return;
    switch (type) {
      case "email":
        setEmail(input);
        break;
      case "fullname":
        setFullName(input);
        break;
      case "username":
        setUsername(input);
        break;
      case "pwd":
        setPassword(input);
        break;
      default:
        break;
    }
  };

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
            <input
              id="email"
              type="text"
              placeholder="Email"
              onChange={handleInput}
            />
            <input
              id="fullname"
              type="text"
              placeholder="Full Name"
              onChange={handleInput}
            />
            <input
              id="username"
              type="text"
              placeholder="Username"
              onChange={handleInput}
            />
            <input
              id="pwd"
              type="text"
              placeholder="Password"
              onChange={handleInput}
            />
            <button
              className="signup-button"
              onClick={signup}
              disabled={!signupEnabled}
            >
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
        <Link to="/login">
          <button className="link-button">Log in</button>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
