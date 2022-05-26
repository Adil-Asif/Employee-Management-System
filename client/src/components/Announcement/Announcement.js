import React from "react";
import "./Announcement.scss";
import { Avatar } from "antd";

const Announcement = (props) => {
  return (
    <div className="announcement">
      <div>{props.announcementDescription}</div>
      <div>
        <Avatar />
      </div>
    </div>
  );
};

export default Announcement;
