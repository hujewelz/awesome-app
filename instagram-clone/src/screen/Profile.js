import React, { useRef, useState } from "react";
import "./Profile.css";
import { Avatar } from "@material-ui/core";
import { uploadImage } from "../ImgeUploader";
import ProfileToolbar from "../components/ProfileToolbar";
import { Switch, Route, useRouteMatch } from "react-router-dom";

function Profile({ user }) {
  const { path } = useRouteMatch();

  const [indexOfItem, setIndexOfItem] = useState(0);

  return (
    <div className="profile">
      <div className="profile-main">
        <ProfileInfo user={user} />
        <hr className="profile-divider" />
        <ProfileToolbar
          selected={indexOfItem}
          onSelected={(idx) => setIndexOfItem(idx)}
        />

        <div className="profile-posts">
          <Switch>
            <Route exact path="/profile">
              <h1>POST</h1>
            </Route>
            <Route exact path={`${path}/igtv`}>
              <h1>IGTV</h1>
            </Route>
            <Route exact path={`${path}/saved`}>
              <h1>SAVED</h1>
            </Route>
            <Route exact path={`${path}/tagged`}>
              <h1>TAGGED</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

const ProfileInfo = ({ user }) => {
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
  );
};

export default Profile;
