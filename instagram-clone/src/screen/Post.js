import React from "react";
import "./Post.css";
import PostItem from "../components/Post";

function Post() {
  return (
    <div className="post">
      <div className="post-content">
        <div className="post-container">
          <PostItem />
          <PostItem />
          <PostItem />
        </div>
        <div className="sidebar-right">
          <h1>Suggestion For You</h1>
        </div>
      </div>
    </div>
  );
}

export default Post;
