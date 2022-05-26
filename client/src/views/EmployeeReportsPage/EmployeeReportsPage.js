import { React, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import CustomFooter from "../../components/CustomFooter/CustomFooter";
import { Layout } from "antd";
import "./EmployeeReportsPage.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import PageTitle from "../../components/PageTitle/PageTitle";
import EmployeeReportItem from "../../components/EmployeeReportItem/EmployeeReportItem";
import axios from "axios";
const { Content } = Layout;

const EmployeeReportsPage = () => {
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
    <div className="employeeReportsPage">
      <Header isLogin={true} />
      <Layout
        style={{
          minHeight: "82.25vh",
          backgroundColor: "var(--layout-background)",
        }}
      >
        <Sidebar PageKey="6" />
        <Layout
          className="site-layout"
          style={{ backgroundColor: "var(--layout-background)" }}
        >
          <Content style={{ margin: "3% 0% 0% 5.5%", paddingBottom: "5%" }}>
            <div className="content">
              <div className="titleSection">
                <div className="pageTitle">
                  <PageTitle title="Employee Reports" />
                </div>
              </div>
              <div className="employeeList">
                {employeeData.map((employee, i, employeeData) =>
                  i + 1 !== employeeData.length ? (
                    <EmployeeReportItem
                      name={employee.username}
                      userId = {employee.userId}
                      email={employee.emailaddress}
                      role={employee.role}
                      isEnd={false}
                    />
                  ) : (
                    <EmployeeReportItem
                      name={employee.username}
                      userId = {employee.userId}
                      email={employee.emailaddress}
                      role={employee.role}
                      isEnd={true}
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

export default EmployeeReportsPage;
