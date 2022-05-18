import { React } from "react";
import Header from "../../components/Header/Header";
import CustomFooter from "../../components/CustomFooter/CustomFooter";
import { Layout } from "antd";
import "./FeedbackPage.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import PageTitle from "../../components/PageTitle/PageTitle";
const { Content } = Layout;

const FeedbackPage = () => {
  return (
    <div className="feedbackPage">
      <Header isLogin={true} />
      <Layout
        style={{
          minHeight: "82.25vh",
          backgroundColor: "var(--layout-background)",
        }}
      >
        <Sidebar PageKey="11" />
        <Layout
          className="site-layout"
          style={{ backgroundColor: "var(--layout-background)" }}
        >
          <Content style={{ margin: "3% 0% 0% 5.5%", paddingBottom: "5%" }}>
            <div className="content">
              <div className="titleSection">
                <div className="pageTitle">
                  <PageTitle title="Feedback" />
                </div>
              </div>
              <div className="feedbackItem">
                LoremIp lkcnlkenvlknlklk elj kj ckjjwebcvjnlknvlklk
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>

      <CustomFooter />
    </div>
  );
};

export default FeedbackPage;
