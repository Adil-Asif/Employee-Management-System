import { React, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import CustomFooter from "../../components/CustomFooter/CustomFooter";
import { Button, Layout, Modal, Form, Input } from "antd";
import "./Benefits.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import PageTitle from "../../components/PageTitle/PageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import BenefitItem from "../../components/BenefitItem/BenefitItem";
const { Content } = Layout;

const Benefits = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [benefitDetails, setBenefitDetails] = useState("");
  const [form] = Form.useForm();

  useEffect(() => {
    if (benefitDetails !== "") {
      console.log(benefitDetails);
      setIsModalVisible(false);
    }
  }, [benefitDetails]);

  const onSubmit = (values) => {
    setBenefitDetails(values);
  };
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
              </div>
              <div className="benfits">
                <BenefitItem
                  sno="1"
                  title="abc"
                  description="helo"
                  promo="123"
                />
                <BenefitItem
                  sno="1"
                  title="abc"
                  description="helo"
                  promo="123"
                />
                <BenefitItem
                  sno="1"
                  title="abc"
                  description="helo"
                  promo="123"
                />
                <BenefitItem
                  sno="1"
                  title="abc"
                  description="helo"
                  promo="123"
                />
                <BenefitItem
                  sno="1"
                  title="abc"
                  description="helo"
                  promo="123"
                />
                <BenefitItem
                  sno="1"
                  title="abc"
                  description="helo"
                  promo="123"
                />
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>

      <CustomFooter />
    </div>
  );
};

export default Benefits;
