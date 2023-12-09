import { useState } from "react";
import React from "react";
import Dashboard from "./Dashboard";
import User from "./User";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const buttonClicked = () => {
    navigate("/dashboard");
  };

  const buttonClickedUser = () => {
    navigate("/user");
  };
  return (
    <div className="footer_container">
      <button className="footer_button" onClick={buttonClicked} id="dash">
        <img
          alt="dash"
          // id="dash"
          className="home"
          src="https://cdn.pixabay.com/photo/2017/09/12/06/26/home-2741413_1280.png"
        />
      </button>
      <button className="footer_button" onClick={buttonClickedUser} id="user">
        <img
          id="user"
          src="https://perfectcutwi.com/images/clients/user-icon-green.png"
          alt="user"
          className="user"
        />
      </button>
    </div>
  );
}

export default Footer;
