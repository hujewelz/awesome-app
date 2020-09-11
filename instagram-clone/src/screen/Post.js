import React, { useEffect } from "react";
import "./Post.css";
import PostItem from "../components/Post";
import { Avatar } from "@material-ui/core";
import Suggestion from "../components/Suggestion";
import FollowedUser from "../components/FollowedUser";

function Post({ user }) {
  return (
    <div className="main">
      <div className="hot">
        <FollowedUser />
        <FollowedUser />
        <FollowedUser />
        <FollowedUser />
        <FollowedUser />
      </div>
      <div className="post-container">
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
      <div className="sidebar-right">
        <div className="userinfo">
          <Avatar src={user.photoURL} />
          <div className="username">
            <h3>{user.fullName}</h3>
            <p>{user.name}</p>
          </div>
        </div>
        <Suggestion />
      </div>
    </div>
  );
}

export default Post;
