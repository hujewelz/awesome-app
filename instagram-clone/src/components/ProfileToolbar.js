import React from "react";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import VideoCallOutlinedIcon from "@material-ui/icons/VideoCallOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";
import "./ProfileToolbar.css";
import { Link, useRouteMatch } from "react-router-dom";

function ProfileToolbar({ selected, onSelected }) {
  const { url } = useRouteMatch();

  const items = [
    {
      icon: <AppsOutlinedIcon />,
      title: "POST",
      dest: `${url}`,
    },
    {
      icon: <VideoCallOutlinedIcon />,
      title: "IGTV",
      dest: `${url}/igtv`,
    },
    {
      icon: <BookmarkBorderOutlinedIcon />,
      title: "SAVED",
      dest: `${url}/saved`,
    },
    {
      icon: <AccountBoxOutlinedIcon />,
      title: "TAGGED",
      dest: `${url}/tagged`,
    },
  ];

  return (
    <div className="profile-toolbar">
      {items.map((item, idx) => (
        <Link key={idx} to={item.dest}>
          <div
            className={`toolbar-item ${selected === idx && "actived"}`}
            onClick={() => onSelected(idx)}
          >
            {item.icon}
            <span>{item.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProfileToolbar;
