import { React, useEffect, useState } from "react";
import { Avatar, Upload, Form, Button, Modal } from "antd";
import { storage } from "../../services/Firebase/Firebase";
import { UserOutlined, PlusOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import "./ProfileTitle.scss";
const ProfileTitle = () => {
  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    if (imageAsUrl.imgUrl !== "") {
      console.log(imageAsUrl); //trigger image
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageAsUrl]);

  useEffect(() => {
    const handleFireBaseUpload = () => {
      console.log("start of upload");
      // async magic goes here...
      console.log(imageAsFile);
      if (imageAsFile === "") {
        console.error(
          `not an image, the image file is a ${typeof imageAsFile}`
        );
      }

      if (imageAsFile !== undefined) {
        const uploadTask = storage
          .ref(`/images/${imageAsFile.name}`)
          .put(imageAsFile);
        //initiates the firebase side uploading
        uploadTask.on(
          "state_changed",
          (snapShot) => {
            //takes a snap shot of the process as it is happening
            console.log(snapShot);
          },
          (err) => {
            //catches the errors
            console.log(err);
          },
          () => {
            // gets the functions from storage refences the image storage in firebase by the children
            // gets the download url then sets the image from firebase as the value for the imgUrl key:
            // TODO: Reolve issue returns url on second submit look for solution. Issue with promise
            storage
              .ref("images")
              .child(imageAsFile.name)
              .getDownloadURL()
              .then(async (fireBaseUrl) => {
                if (fireBaseUrl !== "") {
                  setImageAsUrl((prevObject) => ({
                    ...prevObject,
                    imgUrl: fireBaseUrl,
                  }));
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
        );
      }
    };

    const funct = () => {
      if (imageAsFile !== "") {
        handleFireBaseUpload();
      }
    };
    funct();
  }, [imageAsFile]);

  const onSubmit = (values) => {
    setImageAsFile(values.uploadImageFile.file);
    setIsModalVisible(false);
  };
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
          <Button
            onClick={() => {
              setIsModalVisible(true);
            }}
            className="uploadButton"
            icon={
              <PlusOutlined
                style={{ color: "var(--white)", fontSize: "15px" }}
              />
            }
          ></Button>
          <Modal
            centered
            title="Upload Image"
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
            className="uploadImageForm"
          >
            <div className="uploadImagesForm">
              <Form form={form}>
                <Form.Item name="uploadImageFile">
                  <Upload.Dragger
                    listType="picture"
                    accept=".png,.jpg"
                    defaultFileList={""}
                    beforeUpload={(file) => {
                      console.log({ file });
                      return false;
                    }}
                    action={"localhost:3000/"}
                  >
                    <Button
                      icon={
                        <FontAwesomeIcon icon={faUpload} className="icon" />
                      }
                    >
                      Upload Image
                    </Button>
                  </Upload.Dragger>
                </Form.Item>
              </Form>
            </div>
          </Modal>
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
