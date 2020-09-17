import React, { useState } from "react";
import "./Post.css";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import { BsHeart } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { Avatar } from "@material-ui/core";

function PostItem({ post }) {
  const [comment, setComment] = useState("");

  const postComment = (e) => {
    e.preventDefault();
    console.log(comment);
    setComment("");
  };

  return (
    <div className="postitem">
      <div className="post-header">
        <div className="post-userinfo">
          <Avatar className="post-usericon" src={post.user.photoURL} />
          <span>{post.user.name}</span>
        </div>
        <MoreHorizOutlinedIcon />
      </div>
      <div className="post-context">
        <img className="post-img" src={post.imageURL} alt="" />
        <div className="post-toolbar">
          <BsHeart />
          <AiOutlineMessage />
          <FiSend />
        </div>
        <div className="post-likes">2,456 likes</div>
        <div className="post-text">
          <span>{post.user.name}</span>&nbsp;{post.caption}.
        </div>
        <div className="post-comment">
          <form>
            <input
              type="text"
              value={comment}
              placeholder="Add a comment..."
              onChange={(e) => setComment(e.target.value.trim())}
            />
            <button
              className="post-comment-postbutton"
              type="submit"
              disabled={!comment}
              onClick={postComment}
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
