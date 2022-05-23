import React, { useEffect } from "react";
import "./Projects.scss";
import axios from "axios";

const Projects = () => {
  useEffect(()=>{
    axios.get('http://localhost:5000/profile/project').then(response=>{
      console.log(response.data)
    })
  },[])
  return (
    <div className="projectItem">
      <div className="row">
        <div
          className="details"
          style={{
            borderRight: "2px solid var(--border-color)",
            width: "150px",
          }}
        >
          <div className="number">3</div>
          <div className="text">Ongoing Projects</div>
        </div>
        <div className="details" style={{ width: "150px" }}>
          <div className="number">2</div>
          <div className="text">Completed Projects</div>
        </div>
      </div>
      <div className="column">
        <div className="details">
          <div className="number">5</div>
          <div className="text">Total Projects</div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
