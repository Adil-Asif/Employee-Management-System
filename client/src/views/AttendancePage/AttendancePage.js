import React, { useEffect, useState } from "react";
import "./AttendancePage.scss";
import Header from "../../components/Header/Header";
import CustomFooter from "../../components/CustomFooter/CustomFooter";
import PageTitle from "../../components/PageTitle/PageTitle";
import noData from "../../assets/images/noData.svg";
import { Layout, Button, Timeline, Image } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import axios from "axios";
import { useSelector } from "react-redux";
const { Content } = Layout;

const AttendancePage = () => {
  let attendanceInfo = {
    userid: "",
    time: "",
    status: "Punch Out",
    isStatusUpdate: "false",
  };
  const [attendanceDetails, setAttendanceDetails] = useState([attendanceInfo]);
  const [currentAttendance, setCurrentAttendance] = useState(attendanceInfo);
  const [testUpdate, setTestUpdate] = useState(true);
  const [testUpdate2, setTestUpdate2] = useState(true);
  const userid = useSelector((state) => state.userDetails.userid);
  console.log(userid);
  useEffect(() => {
    axios
      .get("http://localhost:5000/attendance", { params: { userId: userid } })
      .then((result) => {
        console.log(result);
        if (result.data !== "none") {
          console.log(result.data[0], "h");
          attendanceInfo = result.data;
          setAttendanceDetails(attendanceInfo);
        }
      });
  }, [testUpdate2]);
  useEffect(() => {
    console.log(attendanceDetails, "h");
  });
  useEffect(() => {
    console.log(currentAttendance.isStatusUpdate);
    if (currentAttendance.isStatusUpdate === true) {
      console.log("success");
      axios
        .post("http://localhost:5000/attendance", currentAttendance)
        .then((response) => {
          setCurrentAttendance(attendanceInfo);
          if (testUpdate2) {
            setTestUpdate2(false);
          } else {
            setTestUpdate2(true);
          }
        });

      // attendanceInfo.isStatusUpdate = false;
    }
  }, [testUpdate]);

  const calcTime = () => {
    attendanceInfo = attendanceDetails[0];
    const t = new Date();
    const date = ("0" + t.getDate()).slice(-2);
    const month = ("0" + (t.getMonth() + 1)).slice(-2);
    const year = t.getFullYear();
    const hours = ("0" + t.getHours()).slice(-2);
    const minutes = ("0" + t.getMinutes()).slice(-2);
    const seconds = ("0" + t.getSeconds()).slice(-2);
    attendanceInfo.time = `${date}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
    // console.log(attendanceDetails);
    console.log(attendanceInfo, "j");
    if (attendanceInfo.status === "Punch In") {
      attendanceInfo.status = "Punch Out";
    } else {
      attendanceInfo.status = "Punch In";
    }
    attendanceInfo.userid = userid;
    attendanceInfo.isStatusUpdate = true;
    console.log(1);
    setCurrentAttendance(attendanceInfo);
    if (testUpdate) {
      setTestUpdate(false);
    } else {
      setTestUpdate(true);
    }
  };
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
                    <Button
                      type="primary"
                      onClick={() => {
                        calcTime();
                      }}
                    >
                      Punch
                    </Button>
                  </div>
                  <div className="latest">
                    {attendanceDetails[0].time !== "" ? (
                      <>
                        Latest Activity <br />
                        {attendanceDetails[0].status} at {attendanceDetails[0].time}
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div className="attendanceHistory">
                  {attendanceDetails[0].time !== "" ? (
                    <>
                      <Timeline>
                        {attendanceDetails.map((attendanceDetail) => (
                          console.log(attendanceDetail, "yes"),
                          <>
                            <Timeline.Item>
                            {attendanceDetail.status} at {attendanceDetail.time}
                            </Timeline.Item>
                          </>
                        ))}

                        
                      </Timeline>
                    </>
                  ) : (
                    <div className="noattendanceHistory">
                      <Image
                        src={noData}
                        alt="noData"
                        style={{ width: "70%" }}
                      />
                    </div>
                  )}
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

export default AttendancePage;
