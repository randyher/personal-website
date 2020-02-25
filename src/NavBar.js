import React from "react";

function NavBar(props) {
  const finalLi = {
    "margin-right": "4rem"
  };
  console.log(props);
  return (
    <div className="navbar">
      <ul className="nav-ul">
        {/* <li onClick={() => props.onChange("contact")} className="nav-li">
          <a style={finalLi} href="#home">
            Contact
          </a>
        </li>
        <li onClick={() => props.onChange("projects")} className="nav-li">
          <a href="#project">Projects</a>
        </li>
        <li onClick={() => props.onChange("experience")} className="nav-li">
          <a href="#experience">Work Experience</a>
        </li> */}
        <li onClick={() => props.onChange("about")} className="nav-li">
          <a style={finalLi} href="#about">
            About
          </a>
        </li>
        <li onClick={() => props.onChange("default")} className="nav-li">
          <a href="#home">Home</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
