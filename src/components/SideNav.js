import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="sideNav">
      <ul class="nav flex-column">
        <li class="nav-item">
          <Link to="/" class="btn navbarItem">
            <h4 className="navText">Home</h4>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/Students" class="btn navbarItem">
            <h4 className="navText">Students</h4>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/Courses" class="btn navbarItem">
            <h4 className="navText">Courses</h4>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/Results" class="btn navbarItem">
            <h4 className="navText">Results</h4>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
