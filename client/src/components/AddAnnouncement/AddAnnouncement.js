import { React, useEffect, useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import "./AddAnnouncement.scss";

const AddAnnouncement = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [announcementDetails, setAnnouncementDetails] = useState("");
  const [form] = Form.useForm();

  useEffect(() => {
    if (announcementDetails !== "") {
      console.log(announcementDetails);
      setIsModalVisible(false);
    }
  }, [announcementDetails]);

  const onSubmit = (values) => {
    setAnnouncementDetails(values);
  };

  return (
    <div className="addAnnouncementItem">
      <div className="column">
        <div className="details">
          <div className="number">5</div>
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
