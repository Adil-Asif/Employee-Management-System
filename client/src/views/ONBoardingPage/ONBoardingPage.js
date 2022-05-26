import { React, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import CustomFooter from "../../components/CustomFooter/CustomFooter";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Layout } from "antd";
import "./ONBoardingPage.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Employee from "../../components/Employee/Employee";
import axios from "axios";
const { Content } = Layout;

const ONBoardingPage = () => {
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/userDetails").then((response) => {
      console.log(response.data);
      setEmployeeData(response.data);
      //TODO: Update state here and render data
      console.log("1");
    });
  }, []);
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
                {employeeData.map((employee, i, employeeData) =>
                  i + 1 === employeeData.length ? (
                    <Employee
                      isOnboarded={employee.isOnboarded}
                      isEnd={true}
                      name={employee.username}
                      userId = {employee.userId}
                      role={employee.role}
                      email={employee.emailaddress}
                    />
                  ) : (
                    <Employee
                      isOnboarded={employee.isOnboarded}
                      isEnd={false}
                      userId = {employee.userId}
                      name={employee.username}
                      role={employee.role}
                      email={employee.emailaddress}
                    />
                  )
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

export default ONBoardingPage;
