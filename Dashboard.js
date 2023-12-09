import React from "react";
import "./Dashboard.css";
import Footer from "./Footer";
import Header from "./Header";

function Dashboard() {
  return (
    <div className="dashboard">
      <div>
        <Header />
      </div>
      <div>
        <img
          src="C:\Users\DELL\GreenDzine\greendzine\src\Group 46.jpg"
          alt="userpic"
          className="user_pic"
        />
      </div>
      <div>
        <img
          alt="moptro"
          src="https://static.wixstatic.com/media/b6a1fa_b526a87b8e514ad3bdfe2f3dc8b85a76~mv2.png/v1/fill/w_204,h_204,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MOPTRO%20LOGO.png"
          className="moptro"
        />
      </div>
      <div className="employee_productivity">
        <h1>Employee Productivity Dashboard</h1>
        <div className="weeks_container">
          <div className="inside_container">
            <p>Productivity on Monday</p>
            <p className="percent">2%</p>
          </div>
          <div className="growth_container"></div>
          <div className="inside_container">
            <p>Productivity on Tuesday</p>
            <p className="percent">92%</p>
          </div>
          <div className="growth_container two"></div>
          <div className="inside_container">
            <p>Productivity on Wednesday</p>
            <p className="percent">122%</p>
          </div>
          <div className="growth_container three"></div>
          <div className="inside_container">
            <p>Productivity on Thursday</p>
            <p className="percent">93%</p>
          </div>
          <div className="growth_container four"></div>
          <div className="inside_container">
            <p>Productivity on Friday</p>
            <p className="percent">89%</p>
          </div>
          <div className="growth_container five"></div>
          <div className="inside_container">
            <p>Productivity on Saturday</p>
            <p className="percent">98%</p>
          </div>
          <div className="growth_container six"></div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
