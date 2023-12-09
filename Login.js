import React from "react";
import { useState } from "react";
import "./Login.css";
import "./App.js";

import { useHistory, useNavigate } from "react-router-dom";
// import DashBoard from "./Dashboard.js";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const buttonClicked = () => {
    if (email === "" || password === "") {
      alert("Wrong Credentials");
    } else {
      return history("/dashboard");
    }
  };
  return (
    <div className="app">
      <div>
        <img
          alt="first_image"
          className="first_image"
          src="https://careers.greendzine.in/recruit/viewCareerImage.do?page_id=395901000000493211&type=logo&file_name=company_logo.png"
        />
        <p className="message">#We are Electric</p>
      </div>
      <div className="form-elements">
        <input
          onChange={(e) => {
            setEmail({ email: e.target.value });
          }}
          placeholder="E-mail"
          className="inputs"
          type="email"
        />
        <input
          onChange={(e) => {
            setPassword({ password: e.target.value });
          }}
          placeholder="Password"
          className="inputs"
          type="password"
        />
        <div>
          <button onClick={buttonClicked} className="button_login">
            Login
          </button>
        </div>
      </div>
      <p className="forgot_password">Forgot Password?</p>
    </div>
  );
}

export default Login;
