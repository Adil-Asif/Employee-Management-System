import { Button } from "antd";
import React from "react";
import "./Leave.scss";
const Leaves = () => {
  return (
    <div className="leaveItem">
      <div className="row">
        <div
          className="details"
          style={{
            borderRight: "2px solid var(--border-color)",
            width: "150px",
          }}
        >
          <div className="number">3</div>
          <div className="text">Leaves Taken</div>
        </div>
        <div className="details" style={{ width: "150px" }}>
          <div className="number">2</div>
          <div className="text">Leaves Left</div>
        </div>
      </div>
      <div className="column">
        <div className="details">
         <Button type="primary">Apply Leave</Button>
        </div>
      </div>
    </div>
  );
};
export default Leaves;
