import React, { useEffect } from "react";
import { db } from "../firebase";
import "./UserPosts.css";

function UserPosts({ userId }) {
  useEffect(() => {
    const docRef = db.collection("posts").doc(`${userId}`);
    docRef.get().then((doc) => {
      console.log("Posts: ", doc.data());
    });
  }, [userId]);

  return <div className="user-posts"></div>;
}

export default UserPosts;
