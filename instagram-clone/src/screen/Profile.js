import React, { useRef } from "react";
import "./Profile.css";
import { Avatar } from "@material-ui/core";
import { uploadImage } from "../ImgeUploader";

function Profile({ user }) {
  const inputEl = useRef(null);

  const chooseImage = () => {
    inputEl.current.click();
  };

  const _uploadImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    uploadImage(file).then((url) => {
      // update user profile
      console.log("image url: ", url);
    });
  };
  return (
    <div className="profile">
      <div className="profile-main">
        <div className="profile-userinfo">
          <input
            ref={inputEl}
            type="file"
            accept="image/png, image/jpeg"
            onChange={_uploadImage}
          />
          <button type="file" onClick={chooseImage}>
            <Avatar src={user.photoURL} />
          </button>
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
        <hr className="profile-divider" />
        <div className="profile-posts"></div>
      </div>
    </div>
  );
}

export default Profile;
