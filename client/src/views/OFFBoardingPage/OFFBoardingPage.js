import { React } from "react";
import Header from "../../components/Header/Header";
import CustomFooter from "../../components/CustomFooter/CustomFooter";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Layout } from "antd";
import "./OFFBoardingPage.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Employee from "../../components/Employee/Employee";
const { Content } = Layout;

const OFFBoardingPage = () => {
  return (
    <div className="offBoardingPage">
      <Header isLogin={true} />
      <Layout
        style={{
          minHeight: "82.25vh",
          backgroundColor: "var(--layout-background)",
        }}
      >
        <Sidebar PageKey="3" />
        <Layout
          className="site-layout"
          style={{ backgroundColor: "var(--layout-background)" }}
        >
          <Content style={{ margin: "3% 0% 0% 5.5%", paddingBottom: "5%" }}>
            <div className="content">
              <div className="titleSection">
                <div className="pageTitle">
                  <PageTitle title="Offboarding" />
                </div>
              </div>
              <div className="employeeList">
                <Employee isOnboarded={true} isEnd={false} />
                <Employee isOnboarded={true} isEnd={false} />
                <Employee isOnboarded={true} isEnd={false} />
                <Employee isOnboarded={true} isEnd={false} />
                <Employee isOnboarded={true} isEnd={true} />
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>

      <CustomFooter />
    </div>
  );
};

export default OFFBoardingPage;