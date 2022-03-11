import React from "react";
import "./Login.css";
import { loginUrl } from "./music";

function Login() {
  return (
    <div className="login">
      <img
        className="login__logo"
        src="https://i.pinimg.com/originals/46/ba/99/46ba99ac676d6c9820a85400da3adf6f.png"
        alt="music logo"
      />
      <a href={loginUrl} className="login__link">
        LOGIN WITH MUSIC-APP
      </a>
    </div>
  );
}

export default Login;
