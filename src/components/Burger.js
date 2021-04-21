import React from "react";
import { stack as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

const Burger = () => {
  return (
    <Menu right>
      <ul>
        <li
          onClick={() => {
            document.getElementById("react-burger-cross-btn").click();
          }}
        >
          <Link className="list" to="/">Home</Link>
        </li>
        <li
          onClick={() => {
            document.getElementById("react-burger-cross-btn").click();
          }}
        >
          <Link className="list" to="/about">About</Link>
        </li>
        <li
          onClick={() => {
            document.getElementById("react-burger-cross-btn").click();
          }}
        >
          <Link className="list" to="/self-guided">Tour</Link>
        </li>
      </ul>
    </Menu>
  );
};

export default Burger;
