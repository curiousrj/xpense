import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [state, setState] = useState("");
  const search = (e) => {
    setState(e.target.value);
  };
  return (
    <div className="navbar-container">
      {window.location.pathname === "/" ? (
        <div className="home-nav-container">
          <div className="home-nav-left">
          <i className="fa-solid fa-magnifying-glass"></i>
            <input
              placeholder="Search for Xpenses"
              onChange={(e) => search(e)}
              value= {state}
            />
          </div>
          <div className="home-nav-right">
          <i className="fa-solid fa-circle-plus"></i>
            <Link to="/add-xpense/">Add</Link>
          </div>
        </div>
      ) : (
        <div className="add-nav-container">
          <div className="add-nav-left">
            <Link to="/"><i className="fa-solid fa-angles-left"></i>Back</Link>
          </div>
          <div className="add-nav-right">
            <Link to="/"><i className="fa-solid fa-circle-xmark"></i>Cancel</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
