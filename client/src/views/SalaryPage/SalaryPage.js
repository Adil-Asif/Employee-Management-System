import { React, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import CustomFooter from "../../components/CustomFooter/CustomFooter";
import { Layout } from "antd";
import "./SalaryPage.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import PageTitle from "../../components/PageTitle/PageTitle";
import axios from "axios";
import { useSelector } from "react-redux";
const { Content } = Layout;

const SalaryPage = () => {
  const userid = useSelector((state) => state.userDetails.userid);
  const [salaryDetails, setSalaryDetails] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/salary", { params: { userId: userid } })
      .then((result) => {
        console.log(result);
        setSalaryDetails(result.data);
      });
  }, []);

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

              {salaryDetails.map((salary, i, salaryDetails, total) =>
            
                i + 1 === salaryDetails.length ? (
                  total = salary.baseSalary + salary.bonuses + salary.reimbursements,
                  <>
                    
                    <div className="paySlip">
                      <div className="payslipHeading">
                        Month of {salary.month}
                      </div>
                      <div className="details">
                        <div className="heading">Base Salary: </div>
                        <div className="description">
                          Pkr {salary.baseSalary}
                        </div>
                      </div>
                      <div className="details">
                        <div className="heading">Bonus: </div>
                        <div className="description">Pkr {salary.bonuses}</div>
                      </div>
                      <div className="details">
                        <div className="heading">Reimbursment: </div>
                        <div className="description">
                          Pkr {salary.reimbursements}
                        </div>
                      </div>
                      <div className="total">
                        <div className="heading">Total: </div>
                        <div className="description">
                          Pkr {total}
                          
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>hi</>
                )
              )}
            </div>
          </Content>
        </Layout>
      </Layout>

      <CustomFooter />
    </div>
  );
};

export default SalaryPage;
