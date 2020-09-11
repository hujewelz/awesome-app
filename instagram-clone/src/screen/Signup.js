import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, db } from "../firebase";
import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signupEnabled, setSignupEnabled] = useState(false);
  const history = useHistory();

  const signup = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => prompt(error));
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        history.replace("/");
        const data = {
          id: user.uid,
          email: user.email,
          photoUrl: user.photoURL,
        };
        db.collection("users")
          .doc(data.id)
          .set({
            ...data,
            name: username,
            fullName: fullName,
          });
      }
    });
  }, [fullName, username, history]);

  const handleInput = (e) => {
    const type = e.target.id;
    const input = e.target.value.trim();
    let [eml, fname, name, pwd] = [email, fullName, username, password];
    switch (type) {
      case "email":
        eml = input;
        setEmail(input);
        break;
      case "fullname":
        fname = input;
        setFullName(input);
        break;
      case "username":
        name = input;
        setUsername(input);
        break;
      case "pwd":
        pwd = input;
        setPassword(input);
        break;
      default:
        break;
    }
    setSignupEnabled(eml && fname && name && pwd);
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
              type="password"
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
