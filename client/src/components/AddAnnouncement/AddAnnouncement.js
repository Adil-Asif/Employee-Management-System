import { React, useEffect, useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import "./AddAnnouncement.scss";
import axios from "axios";
import { useSelector } from "react-redux";

const AddAnnouncement = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [announcementDetails, setAnnouncementDetails] = useState("");
  const [form] = Form.useForm();

  const userid = useSelector((state) => state.userDetails.userid);
  console.log(userid);
  const [announcement, setAnnouncement] = useState("");
  
  useEffect(() => {
    if (announcementDetails !== "") {
      console.log("Announcement Details: ", announcementDetails);
      setIsModalVisible(false);
      axios
        .post("http://localhost:5000/profile", {
          Announcement: {
            userId: userid,
            announcementdescription:
              announcementDetails.announcementDescription,
          },
        })
        .then((response) => {
          console.log(response.data);
        });
    }
  }, [announcementDetails]);

  const onSubmit = (values) => {
    setAnnouncementDetails(values);
    console.log(announcementDetails);
  };

  return (
    <div className="addAnnouncementItem">
      <div className="column">
        <div className="details">
          <div className="number">{props.count}</div>
          <div className="text">Announcements</div>
        </div>
        <div>
          <Button
            type="primary"
            onClick={() => {
              setIsModalVisible(true);
            }}
          >
            Add Announcement
          </Button>
        </div>
      </div>
      <Modal
        centered
        title="Add Announcement"
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
        className="addAnnouncementForm"
      >
        <div className="announcementForm">
          <Form form={form}>
            <Form.Item
              name="announcementDescription"
              label="Announcement Description"
              rules={[
                {
                  required: true,
                  message: "Please enter announcement description",
                },
              ]}
            >
              <Input placeholder="Enter Announcement Description" />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};
export default AddAnnouncement;
