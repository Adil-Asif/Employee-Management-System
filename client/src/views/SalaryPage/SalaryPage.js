import { React } from "react";
import Header from "../../components/Header/Header";
import CustomFooter from "../../components/CustomFooter/CustomFooter";
import { Layout } from "antd";
import "./SalaryPage.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import PageTitle from "../../components/PageTitle/PageTitle";
const { Content } = Layout;

const SalaryPage = () => {
  return (
    <div className="salaryReciept">
      <Header isLogin={true} />
      <Layout
        style={{
          minHeight: "82.25vh",
          backgroundColor: "var(--layout-background)",
        }}
      >
        <Sidebar PageKey="10" />
        <Layout
          className="site-layout"
          style={{ backgroundColor: "var(--layout-background)" }}
        >
          <Content style={{ margin: "3% 0% 0% 5.5%", paddingBottom: "5%" }}>
            <div className="content">
              <div className="titleSection">
                <div className="pageTitle">
                  <PageTitle title="Pay Slip" />
                </div>
              </div>
              <div className="paySlip">
                  <div className="payslipHeading">
                      Month of July
                  </div>
                <div className="details">
                    <div className="heading">Base Salary: </div>
                    <div className="description">Pkr 5000</div>
                </div>
                <div className="details">
                    <div className="heading">Bonus: </div>
                    <div className="description">Pkr 5000</div>
                </div>
                <div className="details">
                    <div className="heading">Reimbursment: </div>
                    <div className="description">Pkr 5000</div>
                </div>
                <div className="total">
                    <div className="heading">Total: </div>
                    <div className="description">Pkr 5000</div>
                </div>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>

      <CustomFooter />
    </div>
  );
};

export default SalaryPage;
