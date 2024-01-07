// import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <ul id="nav">
      <li>
        <Link to="/" style={{ padding: "15px 25px 15px 100px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="../../sparkcoder.png"
              style={{
                width: "30px",
                marginRight: "10px",
                display: "block",
              }}
              alt="logo"
            />
            SparkCoder
          </div>
        </Link>
      </li>
      <li>
        <Link to="/"> Courses </Link>
      </li>
      <li>
        <Link to="/"> Contact </Link>
      </li>
      <li style={{ float: "right" }}>
        <Link to="/" style={{ padding: "20px 100px 20px 25px" }}>
          Login
        </Link>
      </li>
    </ul>
  );
}
