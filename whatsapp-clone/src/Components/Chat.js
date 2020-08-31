import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVert from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import "./Chat.css";
import db, { auth } from "../firebase";
import { useParams } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [roomName, setRoomName] = useState("");
  const { roomId } = useParams();
  const [{ user }] = useStateValue();

  useEffect(() => {
    db.ref("rooms/" + roomId).once("value", (snap) =>
      setRoomName(snap.val().name)
    );

    db.ref("messages/" + roomId).on("value", (snap) => {
      let msgs = [];
      snap.forEach((child) => {
        const msg = { id: child.key, data: child.val() };
        msgs.push(msg);
      });
      setMessages(msgs);
    });
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    setInput("");
    const message = {
      text: input,
      timestamp: Date.now(),
      sender: { id: user.uid, name: user.displayName },
    };
    const newMsgKey = db.ref("messages" + roomId).push().key;
    let updates = {};
    updates["/" + newMsgKey] = message;
    db.ref("messages/" + roomId).update(updates);
  };

  const isMe = (msg) => auth.currentUser.uid === msg.data.sender.id;

  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar />
        <div className="chat-headerInfo">
          <h3>{roomName}</h3>
          <p>last seen Tue. 18 Aug 2020 19:22:47 GTM</p>
        </div>
        <div className="chat-headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat-body">
        {messages.map((msg) => (
          <p
            key={msg.id}
            className={`chat-message ${isMe(msg) && "chat-receiver"} `}
          >
            <span className="chat-name">{msg.data.sender.name}</span>
            {msg.data.text}
            <span className="chat-timestamp">{Date(msg.data.timestamp)}</span>
          </p>
        ))}
      </div>
      <div className="chat-footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <form>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit"></button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
