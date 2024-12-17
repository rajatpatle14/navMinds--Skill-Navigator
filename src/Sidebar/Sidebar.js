import React from "react";
import "./Sidebar.css";


function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>HEXAWARE</h2>
      </div>
      <div className="profile">

        <tr>
          <td>
            <img
            src="https://via.placeholder.com/60" // Placeholder image
            alt="Profile"
            className="profile-img"
            />
          </td>
          <td>
            <h3>Rajat</h3>
            <p>rajatpatle@abc.com</p>
          </td>
        </tr>

      </div>
      <nav className="nav-menu">
        <ul>
          <li className="active">
            <i className="fa fa-home" ></i> Home
          </li>
          <li>
            <i className="fa fa-book"></i> My Trainings
          </li>
          <li>
            <i className="fa fa-user"></i> Connect with Trainer
          </li>
          <li>
            <i className="fa fa-calendar"></i> Calendar
          </li>
          <li>
            <i className="fa fa-bar-chart"></i> Reports
          </li>
          <li>
            <i className="fa fa-cog"></i> Settings
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
