import { React, useEffect, useState } from "react";
import "./Employee.scss";
import { Avatar, Button, Modal, Form, Select } from "antd";
import axios from "axios";
const { Option } = Select;

const Employee = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [onboardingDetails, setOnboardingDetails] = useState("");
  const [form] = Form.useForm();
  useEffect(() => {
    if (onboardingDetails !== "") {
      console.log(onboardingDetails);
      setIsModalVisible(false);
      axios
        .put("http://localhost:5000/userDetails/update", { userId: props.userId })
        .then((response) => {
          console.log(response);
        });
    }
  }, [onboardingDetails]);

  const onSubmit = (values) => {
    setOnboardingDetails(values);
  };
  return (
    <div
      className="employee"
      style={{
        borderBottom: !props.isEnd ? "2px solid var(--border-color)" : "none",
      }}
    >
      <div className="userInfo">
        <div>
          <Avatar shape="square" size={60} />
        </div>
        <div className="details">
          <div className="name">{props.name}</div>
          <div className="email">{props.email}</div>
          {props.isOnboarded ? (
            <>
              {" "}
              <div className="role">{props.role}</div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="button">
        {!props.isOnboarded ? (
          <>
            <Button
              type="primary"
              onClick={() => {
                setIsModalVisible(true);
              }}
            >
              Onboard
            </Button>
            <Modal
              centered
              title="Onboarding"
              visible={isModalVisible}
              okText="Submit"
              cancelText="Cancel"
              onCancel={() => {
                setIsModalVisible(false);
              }}
              onOk={() => {
                form
                  .validateFields()
                  .then((values) => {
                    form.resetFields();
                    onSubmit(values);
                  })
                  .catch((info) => {
                    console.log("Validate Failed:", info);
                  });
              }}
              className="addOnboardingForm"
            >
              <div className="onboardingForm">
                <Form form={form}>
                  <Form.Item
                    name="role"
                    label="Assign Role"
                    rules={[
                      {
                        required: true,
                        message: "Please enter user role",
                      },
                    ]}
                  >
                    <Select placeholder="Enter user role">
                      <Option value="Human Resource">Human Resource</Option>
                      <Option value="Project Lead">Project Lead</Option>
                      <Option value="Project Manager">Project Manager</Option>
                      <Option value="Software Engineer">
                        Software Engineer
                      </Option>
                      <Option value="Automation Engineer">
                        Automation Engineer
                      </Option>
                    </Select>
                  </Form.Item>
                </Form>
              </div>
            </Modal>
          </>
        ) : (
          <>
            <Button
              type="primary"
              // onClick={() => {
              //   setIsOnBoard(false);
              // }}
            >
              Offboard
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
export default Employee;
