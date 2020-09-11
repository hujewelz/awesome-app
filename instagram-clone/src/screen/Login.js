import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEnable, setLoginEnable] = useState(false);
  const history = useHistory();

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.replace("/");
      })
      .catch((error) => prompt(error));
  };

  const handleInput = (e) => {
    const type = e.target.id;
    const input = e.target.value.trim();
    let [eml, pwd] = [email, password];

    switch (type) {
      case "email":
        eml = input;
        setEmail(input ?? "");
        break;
      case "pwd":
        pwd = input;
        setPassword(input ?? "");
        break;
      default:
        break;
    }
    setLoginEnable(eml && pwd);
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
              type="password"
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
