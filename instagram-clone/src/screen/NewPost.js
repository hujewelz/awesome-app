import React from "react";
import { db, FieldValue } from "../firebase";
import { useUserStatus } from "../hook";
import "./NewPost.css";

function NewPost() {
  const [user] = useUserStatus();

  const addPost = () => {
    db.collection("posts")
      .add({
        uid: user.uid,
        caption: "A Test",
        imageURL: "http://example.com/1.jpg",
        createAt: FieldValue.serverTimestamp(),
        user: {
          uid: user.uid,
          name: user.name,
          photoURL: user.photoURL,
        },
      })
      .then((doc) => {
        console.log("doc id: ", doc.id);
      })
      .catch((err) => prompt(err));
  };
  return (
    <div className="new-post">
      <button onClick={addPost}>New Post</button>
    </div>
  );
}

export default NewPost;
