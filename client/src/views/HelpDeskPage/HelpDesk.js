import React from "react";
import "./HelpDesk.scss";
import Header from "../../components/Header/Header";
import CustomFooter from "../../components/CustomFooter/CustomFooter";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Layout } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import LeavesTable from "../../components/LeavesTable/LeavesTable";

const { Content } = Layout;

const HelpDeskPage = () => {
  return (
    <div className="salaryPage">
      <Header isLogin={true} />
      <Layout
        style={{
          minHeight: "82.25vh",
          backgroundColor: "var(--layout-background)",
        }}
      >
        <Sidebar PageKey="7" />
        <Layout
          className="site-layout"
          style={{ backgroundColor: "var(--layout-background)" }}
        >
          <Content style={{ margin: "3% 0% 0% 5.5%", paddingBottom: "5%" }}>
            <div className="content">
              <div className="titleSection">
                <div className="pageTitle">
                  <PageTitle title="Generate Employee Salaries" />
                </div>
              </div>
              <div className="salaryTable">
              <LeavesTable/>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>

      <CustomFooter />
    </div>
  );
};

export default HelpDeskPage;
