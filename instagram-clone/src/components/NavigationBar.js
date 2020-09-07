import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import "./NavigationBar.css";
import { Avatar } from "@material-ui/core";

function NavigationBar() {
  return (
    <div className="app-nav">
      <header className="app-header">
        <div className="app-logo">
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
            className="app-logo"
            alt="Instagram"
          />
        </div>
        <div className="app-header-search">
          <input type="text" placeholder="Search" />
        </div>
        <div className="app-header-button-container">
          <div className="app-header-buttons">
            <HomeIcon className="app-header-icon" />
            <ExploreOutlinedIcon className="app-header-icon" />
            <FavoriteBorderOutlinedIcon className="app-header-icon" />
            <Avatar className="app-header-icon avatar" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavigationBar;
