import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <img
        alt="logo"
        src="/branch.png"
        width="50"
        height="50"
      />
      <a className="menu-item" href="#home">
        Home
      </a>
      <a className="menu-item" href="#projects">
        Projects
      </a>
      <a className="menu-item" href="#about">
        About
      </a>
      <a className="menu-item" href="#contact">
        Contact
      </a>
    </Menu>
  );
};
