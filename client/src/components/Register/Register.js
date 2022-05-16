import React, { useEffect, useState } from "react";
import "./Register.scss";
import { Button, Form, Input, message } from "antd";
import Logo from "../../assets/images/Logo.png";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const { Password } = Input;
const Register = (props) => {
  let navigate = useNavigate();
  const moveToProfilePage = () => {
    navigate("/profile");
  };
  const [loginDetails, setLoginDetails] = useState("");
  const [registrationDetails, setRegistrationDetails] = useState("");
  const onFinish = (values) => {
    props.loginForm
      ? setLoginDetails(values)
      : values.reenterPassword === values.password
      ? setRegistrationDetails(values)
      : message.error("Password donot match! Try Again ;)");
  };

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    loginDetails !== "" ? (
      (console.log(loginDetails), moveToProfilePage())
    ) : (
      <></>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginDetails]);

  useEffect(() => {
    registrationDetails !== "" ? console.log(registrationDetails) : <></>;
  }, [registrationDetails]);
  const handleSubmit = ()=>{
    console.log(registrationDetails.emailaddress)
    axios.post('http://localhost:5000/',
    {emailaddress:registrationDetails.emailaddress,
      password:registrationDetails.password,
      username:registrationDetails.username,
      role:'employee'
    }).then(response=>{
      console.log('response',response.data)
    })
  // console.log('j')  
  }
  return (
    <div className="register">
      <div className="formHeader">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div className="formHeading">
          {!props.loginForm ? <>Registeration Form</> : <>Login Form</>}
        </div>
      </div>
      <div className="formBody">
        <Form name="basic" onFinish={onFinish} autoComplete="off">
          {!props.loginForm ? (
            <>
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input style={{ marginLeft: "60px" }} />
              </Form.Item>
            </>
          ) : (
            <></>
          )}
          <Form.Item
            label="Email Address"
            name="emailaddress"
            rules={[
              {
                required: true,
                message: "Please input your Email Address!",
              },
            ]}
          >
            <Input style={{ marginLeft: "35px" }} type="email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Password style={{ marginLeft: "67px" }} />
          </Form.Item>
          {!props.loginForm ? (
            <>
              <Form.Item
                label="Re - enter Password"
                name="reenterPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Password style={{ marginLeft: "2px" }} />
              </Form.Item>
            </>
          ) : (
            <></>
          )}
          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={handleSubmit}>
              {props.loginForm ? <>Login</> : <>Register</>}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
