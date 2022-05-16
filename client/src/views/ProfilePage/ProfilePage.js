import { React } from "react";
import Header from "../../components/Header/Header";
import CustomFooter from "../../components/CustomFooter/CustomFooter";
import { Layout } from "antd";
import "./ProfilePage.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProfileTitle from "../../components/ProfileTitle/ProfileTitle";
import Announcement from "../../components/Announcement/Announcement";
import Projects from "../../components/Projects/Projects";
import Leaves from "../../components/Leave/Leave";
const { Content } = Layout;

const ProfilePage = () => {
  return (
    <div className="profilePage">
      <Header isLogin={true} />
      <Layout
        style={{
          minHeight: "100vh",
          backgroundColor: "var(--layout-background)",
        }}
      >
        <Sidebar />
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
                    <Projects/>
                  </div>
                </div>
                <div className="leaves">
                  <div className="heading">Leaves</div>
                  <div>
                    <Leaves/>
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
