import React from "react";

function NavBar() {
  const finalLi = {
    "margin-right": "4rem"
  };
  return (
    <div className="navbar">
      <ul className="nav-ul">
        <li className="nav-li">
          <a style={finalLi} href="#home">
            Contact
          </a>
        </li>
        <li className="nav-li">
          <a href="#news">Projects</a>
        </li>
        <li className="nav-li">
          <a href="#experience">Work Experience</a>
        </li>
        <li className="nav-li">
          <a href="#about">About</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
