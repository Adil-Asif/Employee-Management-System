import { React } from "react";
import Header from "../../components/Header/Header";
import CustomFooter from "../../components/CustomFooter/CustomFooter";
import { Layout } from "antd";
import "./ProfilePage.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
const { Content } = Layout;

const ProfilePage = () => {
  return (
    <div className="profilePage">
      <Header isLogin={true} />
      <Layout
        style={{
          minHeight: "82.25vh",
          backgroundColor: "var(--layout-background)",
        }}
      >
        <Sidebar />
        <Layout
          className="site-layout"
          style={{ backgroundColor: "var(--layout-background)" }}
        >
          <Content style={{ margin: "0 0px" }}></Content>
        </Layout>
      </Layout>

      <CustomFooter />
    </div>
  );
};

export default ProfilePage;
