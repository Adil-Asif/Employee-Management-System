import { React } from "react";
import "./Sidebar.scss";
import { useNavigate } from "react-router-dom";
import profile from "../../assets/images/profile.svg";
import onboarding from "../../assets/images/onboarding.svg";
import offboarding from "../../assets/images/offboarding.svg";
import salary from "../../assets/images/salary.svg";
import projectteam from "../../assets/images/projectTeam.svg";
import reports from "../../assets/images/reports.svg";
import benefits from "../../assets/images/benefits.svg";
import helpdesk from "../../assets/images/helpdesk.svg";
import attendance from "../../assets/images/attendance.svg";
import { Menu, Layout, Image} from "antd";

const { Sider } = Layout;

const Sidebar = (props) => {
  let navigate = useNavigate();
  const movetoProfilePage = () => {
    navigate("/profile");
  };
  const movetoonBoardingPage = () => {
    navigate("/onboarding");
  };
  const movetooffBoardingPage = () => {
    navigate("/offboarding");
  };
  const movetoBenefitsPage = () => {
    navigate("/benefits");
  };
  const movetoEmployeeReportsPage = () => {
    navigate("/employeereports");
  };
  return (
    <div className="sidebar">
      <Sider breakpoint="lg" style={{}}>
        <Menu mode="inline" className="menu" theme="dark"  defaultSelectedKeys={[props.PageKey]}>
          <Menu.Item className="menuItem" key="1" onClick={movetoProfilePage}>
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
          <Menu.Item className="menuItem" key="9">
            <div>
              <Image
                className="image"
                src={attendance}
                alt="attendance"
                preview={false}
              />
              Attendance
            </div>
          </Menu.Item>
          <Menu.Item className="menuItem" key="2"  onClick={movetoonBoardingPage}>
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
          <Menu.Item className="menuItem" key="3" onClick={movetooffBoardingPage}>
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
          <Menu.Item className="menuItem" key="4">
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
          <Menu.Item className="menuItem" key="5">
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
          <Menu.Item className="menuItem" key="6" onClick={movetoEmployeeReportsPage}>
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
          <Menu.Item className="menuItem" key="7">
            <div>
              <Image
                className="image"
                src={helpdesk}
                alt="helpdesk"
                preview={false}
              />
              Help Desks
            </div>
          </Menu.Item>
          <Menu.Item className="menuItem" key="8" onClick={movetoBenefitsPage}>
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
