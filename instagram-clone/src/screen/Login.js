import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEnable, setLoginEnable] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log("sign user: ", JSON.stringify(user));
    });
  }, []);

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => prompt(error));
  };

  const handleInput = (e) => {
    const type = e.target.id;
    const input = e.target.value.trim();
    setLoginEnable(email && password);
    if (!input) return;
    switch (type) {
      case "email":
        setEmail(input);
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
        <div>
          <form className="signup-form">
            <input
              id="email"
              type="text"
              placeholder="Email"
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
              onClick={login}
              disabled={!loginEnable}
            >
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
