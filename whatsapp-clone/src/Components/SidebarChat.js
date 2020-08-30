import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";
import db from "../firebase";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function SidebarChat(props) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat");
    if (roomName) {
      let room = { name: roomName };
      // Get a key for a new room
      const newRoomKey = db.ref("rooms").push().key;

      // Write then new room`s data simultaneously in the rooms list
      let updates = {};
      updates["/rooms/" + newRoomKey] = room;
      db.ref().update(updates);
    }
  };

  return !props.addNewChat ? (
    <Link to={`/rooms/${props.room.id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat-info">
          <h2>{props.room.data.name}</h2>
          <p>Last message...</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat}>
      <div className="sidebarChat">
        <h1>Add new Chat</h1>
      </div>
    </div>
  );
}

export default SidebarChat;
