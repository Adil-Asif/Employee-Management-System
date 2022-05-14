import React from "react";
import "./Header.scss";
import { Button, Avatar, Dropdown, Menu } from "antd";
import Logo from "../../assets/images/Logo.png";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const Header = (props) => {
  let navigate = useNavigate();
  const movetoHomePage = () => {
    navigate("/");
  };
  const menu = (
    <Menu
      items={[
        {
          label: (
            <div
              onClick={() => {
                movetoHomePage();
              }}
            >
              Logout
            </div>
          ),
          key: "1",
        },
      ]}
    />
  );
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      {props.isLogin ? (
        <>
          <div>
            <Dropdown overlay={menu} placement="bottom" arrow>
              <Avatar
                size={50}
                icon={<UserOutlined />}
                style={{
                  backgroundColor: "#8785a2",
                  margin: "5px 20px 5px 0px",
                }}
              />
            </Dropdown>
          </div>
        </>
      ) : (
        <>
          <div className="buttons">
            <div className="login">
              <Button
                type="primary"
                onClick={(event) => {
                  props.response(true);
                  event.preventDefault();
                }}
              >
                Login
              </Button>
            </div>
            <div className="register">
              <Button
                type="primary"
                onClick={(event) => {
                  props.response(false);
                  event.preventDefault();
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;