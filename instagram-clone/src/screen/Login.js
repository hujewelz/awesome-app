import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <form>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button>Sign In</button>
      </form>
      <p>
        Need a account?&nbsp;
        <Link to="/signup">
          <button className="link-button">Sign up now!</button>
        </Link>
      </p>
    </div>
  );
}

export default Login;
