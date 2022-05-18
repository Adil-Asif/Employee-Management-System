import React from "react";
import { Avatar } from "antd";
import "./ProjectItem.scss";
const ProjectItem = () => {
  return (
    <div className="yourProjects">
      <div className="projects">
        <div className="projectHeader">
          <div
            style={{
              padding: "60px",
              borderRadius: "8px",
              backgroundColor: "var(--gray)",
            }}
          ></div>
          <div className="name-description">
            <span className="project-name">Test 1</span>{" "}
            <div className="project-description">Lorem Ipsumkjsdvnmd</div>
          </div>
        </div>
        <div className="members-list">
          <div className="member">
            <Avatar />
          </div>
          <div className="member">
            <Avatar />
          </div>
          <div className="member">
            <Avatar />
          </div>
          <div className="member">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
