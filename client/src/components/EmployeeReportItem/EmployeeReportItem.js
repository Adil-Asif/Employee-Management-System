import { React, useEffect, useState } from "react";
import "./EmployeeReportItem.scss";
import { Avatar, Button, Modal, Form, Input } from "antd";
import axios from "axios";
import { useSelector } from "react-redux";

const EmployeeReportItem = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [form] = Form.useForm();
  const userId = props.userId;

  useEffect(() => {
    if (feedback !== "") {
      console.log(feedback);
      console.log(userId);
      setIsModalVisible(false);
      axios.post("http://localhost:5000/feedback", {feedbackDescription: feedback.feedbackDescription, userId: userId}).then((response) => {
        console.log(response);
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [feedback]);

  const onSubmit = (values) => {
    setFeedback(values);
  };
  return (
    <div
      className="employeeReportItem"
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
          <div className="role">{props.role}</div>
        </div>
      </div>
      <div className="button">
        <Button
          type="primary"
          onClick={() => {
            setIsModalVisible(true);
          }}
        >
          Generate Feedback
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
          className="generateFeedbackForm"
        >
          <div className="generateFeedbacksForm">
            <Form form={form}>
              <div>
                <h3>Details to be included</h3>
                <ul>
                  <li>Feedback for dates starting from and to</li>
                  <li>Appreciation of work</li>
                  <li>Projects Worked on</li>
                  <li>Complaints if any</li>
                  <li>Suggestions to improve</li>
                </ul>
              </div>
              <Form.Item
                name="feedbackDescription"
                label="Feedback"
                rules={[
                  {
                    required: true,
                    message: "Please enter user role",
                  },
                ]}
              >
                <Input.TextArea
                  showCount
                  maxLength={5000}
                  style={{ height: "200px" }}
                  placeholder="Enter Feedback..."
                />
              </Form.Item>
            </Form>
          </div>
        </Modal>
      </div>
    </div>
  );
};
export default EmployeeReportItem;
