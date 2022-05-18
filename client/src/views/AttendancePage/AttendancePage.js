import React from "react";
import "./AttendancePage.scss";
import Header from "../../components/Header/Header";
import CustomFooter from "../../components/CustomFooter/CustomFooter";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Layout, Button, Timeline } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import LeavesTable from "../../components/LeavesTable/LeavesTable";

const { Content } = Layout;

const HelpDeskPage = () => {
  return (
    <div className="attendancePage">
      <Header isLogin={true} />
      <Layout
        style={{
          minHeight: "82.25vh",
          backgroundColor: "var(--layout-background)",
        }}
      >
        <Sidebar PageKey="9" />
        <Layout
          className="site-layout"
          style={{ backgroundColor: "var(--layout-background)" }}
        >
          <Content style={{ margin: "3% 0% 0% 5.5%", paddingBottom: "5%" }}>
            <div className="content">
              <div className="titleSection">
                <div className="pageTitle">
                  <PageTitle title="Attendance" />
                </div>
              </div>
              <div className="attendance">
                <div className="markAttendance">
                  <div className="punchButton">
                    <Button type="primary">Punch In</Button>
                  </div>
                  <div className="latest">
                    Latest Activity <br />
                    1234
                  </div>
                </div>
                <div className="attendanceHistory">
                  <Timeline>
                    <Timeline.Item>
                      Create a services site 2015-09-01
                    </Timeline.Item>
                    <Timeline.Item>
                      Solve initial network problems 2015-09-01
                    </Timeline.Item>
                    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                    <Timeline.Item>
                      Network problems being solved 2015-09-01
                    </Timeline.Item>
                    <Timeline.Item>
                      Network problems being solved 2015-09-01
                    </Timeline.Item>
                    <Timeline.Item>
                      Network problems being solved 2015-09-01
                    </Timeline.Item>
                    <Timeline.Item>
                      Network problems being solved 2015-09-01
                    </Timeline.Item>
                    <Timeline.Item>
                      Network problems being solved 2015-09-01
                    </Timeline.Item>
                    <Timeline.Item>
                      Network problems being solved 2015-09-01
                    </Timeline.Item>
                    <Timeline.Item>
                      Network problems being solved 2015-09-01
                    </Timeline.Item>
                    <Timeline.Item>
                      Network problems being solved 2015-09-01
                    </Timeline.Item>
                  </Timeline>
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

export default HelpDeskPage;
