import React from "react";
import { Avatar, Upload, Button } from "antd";
import { UserOutlined, PlusOutlined } from "@ant-design/icons";
import "./ProfileTitle.scss";
const ProfileTitle = () => {
  return (
    <div className="profileTitle">
      <div className="imageUpload">
        <div className="avatar">
          <Avatar
            shape="square"
            size={60}
            icon={<UserOutlined />}
            style={{ backgroundColor: "var(--secondary-variant-color)" }}
          />
        </div>
        <div className="uploadIcon">
          <Upload.Dragger
            required
            listType="picture"
            accept=".png,.jpg"
            defaultFileList={""}
            beforeUpload={(file) => {
              console.log({ file });
              return false;
            }}
            action={"localhost:3000/"}
            style={{
              padding: "0px",
              width: "23px",
              height: "23px",
              borderRadius: "20px",
              marginTop: "-19px",
              marginLeft: "62px",
            }}
          >
            <Button
              className="uploadButton"
              icon={
                <PlusOutlined
                  style={{ color: "var(--white)", fontSize: "15px" }}
                />
              }
            ></Button>
          </Upload.Dragger>
        </div>
      </div>
      <div className="profileDetails">
        <div className="title">Welcome, &nbsp;Adil Asif</div>
        <div className="role">Software Engineer</div>
      </div>
    </div>
  );
};

export default ProfileTitle;
