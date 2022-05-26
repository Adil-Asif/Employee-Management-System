import { React, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import CustomFooter from "../../components/CustomFooter/CustomFooter";
import { Button, Layout, Modal, Form, Input, Image } from "antd";
import "./BenefitsPage.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import PageTitle from "../../components/PageTitle/PageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import noData from "../../assets/images/noData.svg";
import axios from "axios";
import BenefitItem from "../../components/BenefitItem/BenefitItem";
import { useSelector } from "react-redux";
const { Content } = Layout;

const BenefitsPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [benefits, setBenefits] = useState([]);
  const [testUpdate2, setTestUpdate2] = useState(true);
  const [benefitDetails, setBenefitDetails] = useState("");
  const [form] = Form.useForm();

  useEffect(() => {
    console.log(benefitDetails);
    setIsModalVisible(false);
    axios.get("http://localhost:5000/benefits").then((response) => {
      console.log(response);
      setBenefits(response.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testUpdate2]);
  useEffect(() => {
    if (benefitDetails !== "") {
      console.log(benefitDetails);
      setIsModalVisible(false);
      axios
        .post("http://localhost:5000/benefits", benefitDetails)
        .then((response) => {
          if (testUpdate2) {
            setTestUpdate2(false);
          } else {
            setTestUpdate2(true);
          }
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [benefitDetails]);

  const onSubmit = (values) => {
    setBenefitDetails(values);
  };

  const role = useSelector((state) => state.userDetails.userrole);
  return (
    <div className="benefitsPage">
      <Header isLogin={true} />
      <Layout
        style={{
          minHeight: "82.25vh",
          backgroundColor: "var(--layout-background)",
        }}
      >
        <Sidebar PageKey="8" />
        <Layout
          className="site-layout"
          style={{ backgroundColor: "var(--layout-background)" }}
        >
          <Content style={{ margin: "3% 0% 0% 5.5%", paddingBottom: "5%" }}>
            <div className="content">
              <div className="titleSection">
                <div className="pageTitle">
                  <PageTitle title="Employee Benefits" />
                </div>
                {role === "Human Resource" ? (
                  <div>
                    <Button
                      type="primary"
                      onClick={() => {
                        setIsModalVisible(true);
                      }}
                    >
                      <FontAwesomeIcon icon={faPlus} /> &nbsp;&nbsp;Add Benefits
                    </Button>
                    <Modal
                      centered
                      title="Add Benefit"
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
                      className="addBenefitForm"
                    >
                      <div className="benefitForm">
                        <Form form={form}>
                          <Form.Item
                            name="benefitTitle"
                            label="Benefit Title"
                            rules={[
                              {
                                required: true,
                                message: "Please enter benefit title",
                              },
                            ]}
                          >
                            <Input placeholder="Enter Benefit Title" />
                          </Form.Item>
                          <Form.Item
                            name="benefitDescription"
                            label="Benefit Description"
                            rules={[
                              {
                                required: true,
                                message: "Please enter benefit description",
                              },
                            ]}
                          >
                            <Input placeholder="Enter Benefit Description" />
                          </Form.Item>
                          <Form.Item
                            name="benefitPromoCode"
                            label="Benefit Promo Code"
                            rules={[
                              {
                                required: true,
                                message: "Please enter benefit Promo Code",
                              },
                            ]}
                          >
                            <Input placeholder="Enter Benefit Promo Code" />
                          </Form.Item>
                        </Form>
                      </div>
                    </Modal>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="benfits">
                {benefits.length > 0 ? (
                  benefits.map((benefit) => (
                    <BenefitItem
                      sno={benefit.benefitId}
                      title={benefit.benefitTitle}
                      description={benefit.benefitDescription}
                      promo={benefit.benefitPromoCode}
                    />
                  ))
                ) : (
                  <div className="imageBackground">
                    <Image src={noData} alt="NoData" width="30%" />
                  </div>
                )}
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>

      <CustomFooter />
    </div>
  );
};

export default BenefitsPage;
