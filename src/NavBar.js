import React from "react";

function NavBar() {
  const finalLi = {
    "margin-right": "4rem"
  };
  return (
    <div className="navbar">
      <ul>
        <li>
          <a style={finalLi} href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
