import React from "react";
import "./ProjectManagement.scss";
import { storage } from "../../services/Firebase/Firebase";
import { useEffect, useState } from "react";
import { Layout, Button, Modal, Form, Input, Upload, Select } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/CustomFooter/CustomFooter";
import PageTitle from "../../components/PageTitle/PageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
const { Content } = Layout;
const { TextArea } = Input;
const { Option } = Select;

const ProjectManagement = () => {
  const role = "admin";
  let project = {
    projectID: "",
    projectTitle: "",
    projectDescription: "Lorem Ipsumkjsdvnmd cmv vemelvelkwlv kv",
    projectImage: "",
    projectMembers: "",
    isSubmitted: false,
  };
  const email = [
    "adil.asif@gmail.com",
    "k180123@nu.edu.pk",
    "k181117@nu.edu.pk",
    "k180376@nu.edu.pk",
    "hasaan.malik@nu.edu.pk",
    "syedabdurraffay@gmail.com",
  ];
  const [isModalVisible, setIsModalVisible] = useState(false);
  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);
  const [projectDetails, setProjectDetails] = useState(project);

  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
    setIsModalVisible(false);
  }, [projectDetails, form]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageAsFile]);

  useEffect(() => {
    if (imageAsUrl.imgUrl !== "") {
      project.projectTitle = projectDetails.projectTitle;
      project.projectDescription = projectDetails.projectDescription;
      project.projectMembers = projectDetails.projectMembers;
      project.projectImage = imageAsUrl.imgUrl;
      project.isSubmitted = true;
      setProjectDetails(project);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageAsUrl]);

  useEffect(() => {
    if (projectDetails.isSubmitted) {
      console.log(projectDetails);
    }
  }, [projectDetails]);

  const onSubmit = (values) => {
    project = values;
    setProjectDetails(project);
    handleSubmission(values.projectImage);
  };
  const handleSubmission = (projectImage) => {
    setImageAsFile(projectImage.file);
  };

  return (
    <div className="projectManagementPage">
      <Header isLogin={true} />
      <Layout
        style={{
          minHeight: "82.25vh",
          backgroundColor: "var(--layout-background)",
        }}
      >
        <Sidebar PageKey="5" />
        <Layout className="site-layout" data-theme="dark">
          <Content style={{ margin: "3% 0% 0% 5.5%", paddingBottom: "5%" }}>
            <div className="titleSection">
              {role !== "admin" ? (
                <>
                  <div className="Project-heading">
                    <PageTitle title="Your Projects" />
                  </div>
                </>
              ) : (
                <>
                  <div className="Project-heading">
                    <PageTitle title="Projects" />
                  </div>
                  <div>
                    <Button
                      type="primary"
                      className="left"
                      style={{ marginRight: "4%", borderRadius: "8px" }}
                      onClick={() => {
                        setIsModalVisible(true);
                      }}
                    >
                      Add Project
                    </Button>
                  </div>
                  <Modal
                    centered
                    title="Add Project"
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
                    className="addProjectForm"
                  >
                    <div className="projectForm">
                      <Form form={form}>
                        <Form.Item
                          name="projectTitle"
                          label="Project Tile"
                          rules={[
                            {
                              required: true,
                              message: "Please enter project title",
                            },
                          ]}
                        >
                          <Input
                            placeholder="Enter Project Title"
                            showCount
                            maxLength={50}
                          />
                        </Form.Item>
                        <Form.Item
                          name="projectDescription"
                          label="Project Description"
                          rules={[
                            {
                              required: true,
                              message: "Please enter project description",
                            },
                          ]}
                        >
                          <TextArea showCount maxLength={3000} />
                        </Form.Item>
                        <Form.Item name="projectMembers" label="Project Tile">
                          <Select
                            mode="multiple"
                            style={{ width: "100%" }}
                            placeholder="select Members"
                            optionLabelProp="label"
                          >
                            {/* TODO: Registered Users Names and Email Addresses required here those who are not admin */}
                            {email.map((emailId) => (
                              <Option value={emailId} label={emailId}>
                                <div>Name: {emailId}</div>
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>
                        <Form.Item name="projectImage">
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
                                <FontAwesomeIcon
                                  icon={faUpload}
                                  className="icon"
                                />
                              }
                            >
                              Upload Image
                            </Button>
                          </Upload.Dragger>
                        </Form.Item>
                      </Form>
                    </div>
                  </Modal>
                </>
              )}
            </div>

            <div className="projectItemList">
              <ProjectItem />
            </div>
          </Content>
        </Layout>
      </Layout>

      <Footer />
    </div>
  );
};

export default ProjectManagement;
