// import React from "react";
import { NavLink } from "react-router-dom";
import logo from './sparkcoder.png'

export default function NavBar() {
  return (
    <ul id="nav">
      <li>
        <NavLink to="/" style={{ padding: "15px 0px 15px 0", margin: "0 25px 0 100px" }} exact>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              style={{
                width: "30px",
                marginRight: "10px",
                display: "block",
              }}
              alt="logo"
            />
            SparkCoder
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink to="/courses"> Courses </NavLink>
      </li>
      <li>
        <NavLink to="/contact"> Contact </NavLink>
      </li>
      <li style={{ float: "right" }}>
        <NavLink to="/login" style={{ padding: "20px 100px 20px 25px" }}>
          Login
        </NavLink>
      </li>
    </ul>
  );
}
