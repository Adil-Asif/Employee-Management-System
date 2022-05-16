import { React, useEffect, useState } from "react";
import "./Employee.scss";
import { Avatar, Button, Modal, Form, Select } from "antd";
const { Option } = Select;

const Employee = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [onboardingDetails, setOnboardingDetails] = useState("");
  const [isOnboard, setIsOnBoard] = useState(props.isOnboarded);
  const [form] = Form.useForm();
  useEffect(() => {
    if (onboardingDetails !== "") {
      console.log(onboardingDetails);
      setIsModalVisible(false);
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
          <div className="name">Name</div>
          <div className="email">Email</div>
          {props.isOnboarded ? (
            <>
              {" "}
              <div className="role">Role</div>
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
              onClick={() => {
                setIsOnBoard(false);
              }}
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
