import React from "react";
import "./Profile.css";
import { Avatar } from "@material-ui/core";

function Profile({ user }) {
  return (
    <div className="profile">
      <div className="profile-main">
        <div className="profile-userinfo">
          <Avatar src={user.photoURL} />
          <div className="info-container">
            <h1>{user.name}</h1>
            <div className="info-works">
              <span>0 posts</span>
              <span>0 followers</span>
              <span>0 following</span>
            </div>
            <h2>{user.fullName}</h2>
          </div>
        </div>
        <hr className="profile-divider"/>
        <div className="profile-posts"></div>
      </div>
    </div>
  );
}

export default Profile;
