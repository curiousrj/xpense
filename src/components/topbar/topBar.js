import React from "react";
import { Link } from "react-router-dom";
import GitStar from "./gitStar";
import NavBar from "./navBar";
import "./topbar.css";

const TopBar = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="logo-bar">
          <Link to="/" className="logo">
            Xpense
          </Link>
          <GitStar />
        </div>
      </div>

      <NavBar />
    </React.Fragment>
  );
};

export default TopBar;
