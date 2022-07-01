import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchXpense } from "../../redux/actions/xpenseAction";
import "../../App.css";

const NavBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const search = (e) => {
    setQuery(e.target.value);
    dispatch(searchXpense(e.target.value));
  };
  return (
    <div className="container">
      {window.location.pathname === "/" ? (
        <div className="home-nav-container navbar">
          <div className="home-nav-left">
            <i className="fa-solid fa-magnifying-glass button-icon-margin-right"></i>
            <input
            type="text"
              placeholder="Search for Xpenses"
              onChange={(e) => search(e)}
              value={query}
            />
          </div>
          <div className="home-nav-right border-button">
            <i className="fa-solid fa-circle-plus button-icon-margin-right"></i>
            <Link to="/add-xpense/" className="add-item">
              Add
            </Link>
          </div>
        </div>
      ) : (
        <div className="add-nav-container navbar">
          <div className="add-nav-left button">
            <Link to="/">
              <i className="fa-solid fa-angles-left button-icon-margin-right"></i>
              Back
            </Link>
          </div>
          <div className="add-nav-right button">
            <Link to="/">
              <i className="fa-solid fa-circle-xmark button-icon-margin-right"></i>
              Cancel
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
