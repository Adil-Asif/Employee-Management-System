import { React } from "react";
import "./Sidebar.scss";

import profile from "../../assets/images/profile.svg";
import onboarding from "../../assets/images/onboarding.svg";
import offboarding from "../../assets/images/offboarding.svg";
import salary from "../../assets/images/salary.svg";
import projectteam from "../../assets/images/projectTeam.svg";
import reports from "../../assets/images/reports.svg";
import benefits from "../../assets/images/benefits.svg";
import { Menu, Layout, Image } from "antd";

const { Sider } = Layout;

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <Sider breakpoint="lg" style={{ }}>
        <Menu mode="inline" className="menu" theme="dark">
          <Menu.Item className="menuItem">
            <div>
              <Image
                className="image"
                src={profile}
                alt="profile"
                preview={false}
              />
              Profile
            </div>
          </Menu.Item>
          <Menu.Item className="menuItem">
            <div>
              <Image
                className="image"
                src={onboarding}
                alt="onboarding"
                preview={false}
              />
              Employee Onboarding
            </div>
          </Menu.Item>
          <Menu.Item className="menuItem">
            <div>
              <Image
                className="image"
                src={offboarding}
                alt="offboarding"
                preview={false}
              />
              Employee offboarding
            </div>
          </Menu.Item>
          <Menu.Item className="menuItem">
            <div>
              <Image
                className="image"
                src={salary}
                alt="salary"
                preview={false}
              />
              Salaries
            </div>
          </Menu.Item>
          <Menu.Item className="menuItem">
            <div>
              <Image
                className="image"
                src={projectteam}
                alt="projectteam"
                preview={false}
              />
              Project Teams
            </div>
          </Menu.Item>
          <Menu.Item className="menuItem">
            <div>
              <Image
                className="image"
                src={reports}
                alt="reports"
                preview={false}
              />
              Employee Reports
            </div>
          </Menu.Item>
          <Menu.Item className="menuItem">
            <div>
              <Image
                className="image"
                src={benefits}
                alt="benefits"
                preview={false}
              />
              Employee Benefits
            </div>
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
};

export default Sidebar;
