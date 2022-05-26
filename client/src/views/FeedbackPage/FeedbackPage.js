import { React, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import CustomFooter from "../../components/CustomFooter/CustomFooter";
import { Layout } from "antd";
import "./FeedbackPage.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import PageTitle from "../../components/PageTitle/PageTitle";
import axios from "axios";
import { useSelector } from "react-redux";
const { Content } = Layout;

const FeedbackPage = () => {
  const userid = useSelector((state) => state.userDetails.userid);
  const [Feedback, setFeedback] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/feedback", { params: { userId: userid } })
      .then((result) => {
        console.log(result);
        setFeedback(result.data);
      });
  }, []);
  useEffect(() => {
    console.log(Feedback, "34");
  }, [Feedback]);
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
              {Feedback.map((feedbackdesc) => (
                <div className="feedbackItem">{feedbackdesc.feedback}</div>
              ))}
            </div>
          </Content>
        </Layout>
      </Layout>

      <CustomFooter />
    </div>
  );
};

export default FeedbackPage;
