import React from "react";
import "./CustomFooter.scss";
import { Layout } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <div className="footerLayout">
      <Footer>
        <FontAwesomeIcon icon={faCopyright} /> 2022 Created by Team EMS
      </Footer>
    </div>
  );
};

export default CustomFooter;
