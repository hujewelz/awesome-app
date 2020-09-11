import React from "react";
import "./FollowedUser.css";
import { Avatar } from "@material-ui/core";

function FollowedUser() {
  return (
    <div className="followed-user">
      <div className="followed-avatar">
        <Avatar />
      </div>
      <p>username</p>
    </div>
  );
}

export default FollowedUser;
