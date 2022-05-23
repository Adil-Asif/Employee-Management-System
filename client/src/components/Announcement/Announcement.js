import React from "react";
import "./Announcement.scss";
import { Avatar } from "antd";
import {useEffect} from 'react'
import axios from 'axios'

const Announcement = () => {
  useEffect(()=>{
    axios.get('http://localhost:5000/profile/announcement').then(response=>{
      console.log(response.data)
    })
  })
  return (
    <div className="announcement">
      <div>Text</div>
      <div>
        <Avatar />
      </div>
    </div>
  );
};

export default Announcement;
