import React, { useEffect, useState } from "react";
import "./Post.css";
import PostItem from "../components/Post";
import { Avatar } from "@material-ui/core";
import Suggestion from "../components/Suggestion";
import FollowedUser from "../components/FollowedUser";
import { db } from "../firebase";

function Post({ user }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let data = [];
    db.collection("posts")
      .get()
      .then((snapshop) => {
        snapshop.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
          console.log("post: ", JSON.stringify(doc.data()));
        });
        setPosts(data);
      });
  }, []);

  return (
    <div className="post-main">
      <div className="hot">
        <FollowedUser />
        <FollowedUser />
        <FollowedUser />
        <FollowedUser />
        <FollowedUser />
      </div>
      <div className="post-container">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
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
