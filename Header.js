import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header_container">
      <div>
        <p className="header_image">11.30</p>
      </div>
      <div>
        <img
          src="https://icon-library.com/images/signal-bar-icon/signal-bar-icon-5.jpg"
          alt="signal"
          className="header_image"
        />
        <img
          src="https://logodix.com/logo/1040869.png"
          alt="wifi"
          className="header_image"
        />
        <img
          className="header_image"
          src="https://images.vexels.com/media/users/3/129344/isolated/preview/e9cb06820df7f2ecf6a35375fe213839-battery-icon-by-vexels.png"
          alt="battery"
        />
      </div>
    </div>
  );
}

export default Header;
