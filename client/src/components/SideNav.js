import React from "react";

const SideNav = () => {
  return (
    <div className="sideNav">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="btn btn-outline-secondary navbarItem" href="#">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="btn navbarItem" href="#">
            Students
          </a>
        </li>
        <li class="nav-item">
          <a class="btn navbarItem" href="#">
            Courses
          </a>
        </li>
        <li class="nav-item">
          <a class="btn navbarItem" href="#">
            Results
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
