import { React, useEffect, useState } from "react";
import { Button, Modal, Form, Input, Select } from "antd";
import "./Leave.scss";
import axios from 'axios'

const { Option } = Select;
const Leaves = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [helpDeskDetails, setHelpDeskDetails] = useState("");
  const [form] = Form.useForm();
  
  useEffect(()=>{
    axios.get('http://localhost:5000/profile/help').then(response=>{
      console.log(response.data)
    })
  },[])

  useEffect(() => {
    if (helpDeskDetails !== "") {
      console.log('leave details: ',helpDeskDetails);
      setIsModalVisible(false);
      axios.post('http://localhost:5000/profile',{leave:{user_id:3,helptitle:helpDeskDetails.helpTitle,
      helpdescription:helpDeskDetails.helpDescription,helptype:helpDeskDetails.helptype}
    }).then(response=>{
      console.log(response.data)
    })
    }
  }, [helpDeskDetails]);

  const onSubmit = (values) => {
    setHelpDeskDetails(values);
  };
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
          <Button type="primary" onClick={() => setIsModalVisible(true)}>
            Request Help
          </Button>
        </div>
      </div>
      <Modal
        centered
        title="Request Help"
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
        className="addhelpDeskForm"
      >
        <div className="helpDeskForm">
          <Form form={form}>
            <div>
              <h3>Details</h3>
              <ul>
                <li>Mention the dates if you are requesting leaves</li>
                <li>
                  Mention the amount required, reason, when is the amount
                  required, and when it will be returned if applying for
                  financial aid
                </li>
                <li>Mention what, why and when the resources are required</li>
                <li>
                  Mention reason and last date at office if resigning from the
                  company
                </li>
              </ul>
            </div>
            <Form.Item
              name="helpTitle"
              label="Title"
              rules={[
                {
                  required: true,
                  message: "Please enter request title",
                },
              ]}
            >
              <Input placeholder="Enter request title" />
            </Form.Item>
            <Form.Item
              name="helpDescription"
              label="Description"
              rules={[
                {
                  required: true,
                  message: "Please enter helpDesk description",
                },
              ]}
            >
              <Input placeholder="Enter helpDesk description" />
            </Form.Item>
            <Form.Item
              name="helptype"
              label="Type"
              rules={[
                {
                  required: true,
                  message:
                    "Please enter the necessary details in accordance with the type",
                },
              ]}
            >
              <Select placeholder="Please select request type">
                <Option value="Leave">Leave</Option>
                <Option value="Financial Aid">Financial Aid</Option>
                <Option value="Resources Required">Resources Required</Option>
                <Option value="Resignation">Resignation</Option>
              </Select>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};
export default Leaves;
