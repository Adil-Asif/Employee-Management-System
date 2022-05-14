import { React, useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import CustomFooter from "../../components/CustomFooter/CustomFooter";
import "./RegistrationPage.scss";
import RegistrationPageBanner from "../../assets/images/RegistrationImage.svg";
import Register from "../../components/Register/Register";


const RegistrationPage = () => {
  const [loginForm, setLoginForm] = useState(true);
  const getLoginResponse = (data) => {
    console.log(data);
    setLoginForm(data);
  };
  useEffect(() => {
    console.log(loginForm);
  }, [loginForm]);

  return (
    <div className="registrationPage">
      <Header response={getLoginResponse} />
      <div className="body">
        <div className="right">
          <Register loginForm={loginForm}/>
        </div>
        <div className="left">
          <img src={RegistrationPageBanner} alt="Employee Management" />
        </div>
      </div>
      <CustomFooter />
    </div>
  );
};

export default RegistrationPage;
