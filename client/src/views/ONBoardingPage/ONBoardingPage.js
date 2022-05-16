import { React } from "react";
import Header from "../../components/Header/Header";
import CustomFooter from "../../components/CustomFooter/CustomFooter";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Layout } from "antd";
import "./ONBoardingPage.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Employee from "../../components/Employee/Employee";
const { Content } = Layout;

const ONBoardingPage = () => {
  return (
    <div className="onBoardingPage">
      <Header isLogin={true} />
      <Layout
        style={{
          minHeight: "82.25vh",
          backgroundColor: "var(--layout-background)",
        }}
      >
        <Sidebar PageKey="2" />
        <Layout
          className="site-layout"
          style={{ backgroundColor: "var(--layout-background)" }}
        >
          <Content style={{ margin: "3% 0% 0% 5.5%", paddingBottom: "5%" }}>
            <div className="content">
              <div className="titleSection">
                <div className="pageTitle">
                  <PageTitle title="Onboarding" />
                </div>
              </div>
              <div className="employeeList">
                <Employee isOnboarded={false} isEnd={false} />
                <Employee isOnboarded={false} isEnd={false} />
                <Employee isOnboarded={false} isEnd={false} />
                <Employee isOnboarded={false} isEnd={false} />
                <Employee isOnboarded={false} isEnd={true} />
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>

      <CustomFooter />
    </div>
  );
};

export default ONBoardingPage;
