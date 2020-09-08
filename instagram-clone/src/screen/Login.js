import React from "react";
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
        <button className="link-button">Sign up now!</button>
      </p>
    </div>
  );
}

export default Login;
