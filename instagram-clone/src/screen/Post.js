import React from "react";
import "./Post.css";
import PostItem from "../components/Post";
import { Avatar } from "@material-ui/core";
import Suggestion from "../components/Suggestion";

function Post() {
  return (
    <div className="main">
    <div className="hot">
    </div>
      <div className="post-container">
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
      <div className="sidebar-right">
        <div className="userinfo">
          <Avatar />
          <div className="username">
            <h3>Full Name</h3>
            <p>username</p>
          </div>
        </div>
        <Suggestion />
      </div>
    </div>
  );
}

export default Post;
