import { React, useEffect } from "react";
import Header from "../../components/Header/Header";
import CustomFooter from "../../components/CustomFooter/CustomFooter";
import { Layout } from "antd";
import "./ProfilePage.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProfileTitle from "../../components/ProfileTitle/ProfileTitle";
import Announcement from "../../components/Announcement/Announcement";
import Projects from "../../components/Projects/Projects";
import Leaves from "../../components/Leave/Leave";
import AddAnnouncement from "../../components/AddAnnouncement/AddAnnouncement";
import { useSelector, useDispatch } from "react-redux";
import { setUserDetails } from "../../slice/initialiseUserDetailsSlice";
import axios from "axios";
const { Content } = Layout;

const ProfilePage = () => {
  const dispatch = useDispatch();
  const userid = useSelector((state) => state.userDetails.userid);
  const isLogin = useSelector((state) => state.userDetails.isLogin);
  useEffect(() => {
    axios
      .post("http://localhost:5000/profile/", { profile: { userId: userid } })
      .then((result) => {
        console.log(result, "h");
        dispatch(
          setUserDetails({
            username: result.data.username,
            userrole: result.data.role,
            picture: result.data.imgUrl,
            isOnboard:  result.data.isOnboard,
            emailaddress: result.data.emailaddress,
          })
        );
      });
  }, []);
  return (
    <div className="profilePage">
      <Header isLogin={true} />
      <Layout
        style={{
          minHeight: "100vh",
          backgroundColor: "var(--layout-background)",
        }}
      >
        <Sidebar PageKey="1" />
        <Layout
          className="site-layout"
          style={{ backgroundColor: "var(--layout-background)" }}
        >
          <Content style={{ margin: "3% 0% 0% 6%", paddingBottom: "5%" }}>
            <ProfileTitle />
            <div className="content">
              <div className="right">
                <div className="heading">Announcements</div>
                <div>
                  <Announcement />
                  <Announcement />

                  <Announcement />
                  <Announcement />

                  <Announcement />
                  <Announcement />

                  <Announcement />
                  <Announcement />
                </div>
              </div>
              <div className="left">
                <div className="projects">
                  <div className="heading">Projects</div>
                  <div>
                    <Projects />
                  </div>
                </div>
                <div className="leaves">
                  <div className="heading">Help Desk</div>
                  <div>
                    <Leaves />
                  </div>
                </div>
                <div className="addAnnouncement">
                  <div className="heading">Announcement</div>
                  <div>
                    <AddAnnouncement />
                  </div>
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

export default ProfilePage;
