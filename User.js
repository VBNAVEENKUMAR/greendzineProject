import React, { useState } from "react";
import Footer from "./Footer";
import "./User.css";
// import UserDetails from "./UserDetails";
import Header from "./Header";

function User() {
  const users = [
    { id: 1, name: "Arjun", dob: "31-01-2000", role: "Software Developer" },
    { id: 2, name: "Mahesh", dob: "21-11-2000", role: "Web Developer" },
    { id: 3, name: "Yamini", dob: "01-01-2002", role: "Data Analyst" },
    { id: 4, name: "Gokul", dob: "03-01-2002", role: "Data Scientist" },
    { id: 5, name: "Pandey", dob: "05-01-2002", role: "SQL Developer" },
    { id: 6, name: "Manish", dob: "01-03-2003", role: "Fronend Developer" },
    { id: 7, name: "Bob", dob: "11-10-2001", role: "Backend Developer" },
    { id: 8, name: "Yagul", dob: "21-01-2000", role: "Associate" },
  ];

  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleFilter = (event) => {
    const value = event.target.value;
    const filtered = users.filter((user) => user.name.startsWith(value));
    setFilteredUsers(filtered);
  };

  return (
    <div className="user_container">
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
        <div>
          <img src="https://static.wixstatic.com/media/b6a1fa_b526a87b8e514ad3bdfe2f3dc8b85a76~mv2.png/v1/fill/w_204,h_204,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MOPTRO%20LOGO.png" />
        </div>
        <div>
          <div className="search_container">
            <input
              type="text"
              placeholder="Search with Name"
              onChange={handleFilter}
            />
            <img
              src="http://download.seaicons.com/icons/paomedia/small-n-flat/1024/search-icon.png"
              alt=""
              className="search"
            />
          </div>
          {filteredUsers.map((user) => (
            <div
              className={
                user.id % 2 === 1
                  ? "list_container"
                  : "list_container right_align"
              }
              key={user.name}
            >
              <p>EMP ID: {user.id}</p>
              <p>Name: {user.name}</p>
              <p>DOB: {user.dob}</p>
              <p>Role: {user.role}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default User;
