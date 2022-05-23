import { React, useEffect, useState } from "react";
import "./Register.scss";
import { Button, Form, Input, message } from "antd";
import Logo from "../../assets/images/Logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setIsLogin } from "../../slice/initialiseUserDetailsSlice";
import { useDispatch } from "react-redux";
const { Password } = Input;

const Register = (props) => {
  const dispatch = useDispatch();
  const [isLoginForm, setIsLoginForm] = useState(props.loginForm);
  const [form] = Form.useForm();
  let navigate = useNavigate();
  const moveToProfilePage = () => {
    navigate("/profile");
  };
  const [loginDetails, setLoginDetails] = useState("");
  const [registrationDetails, setRegistrationDetails] = useState("");
  const onFinish = (values) => {
    console.log(isLoginForm);
    isLoginForm
      ? setLoginDetails(values)
      : values.reenterPassword === values.password
      ? setRegistrationDetails(values)
      : message.error("Password donot match! Try Again ;)");
  };

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    loginDetails !== "" ? (
      (console.log(loginDetails),
      axios
        .post("http://localhost:5000/", {
          login: loginDetails,
        })
        .then((response) => {
          if (response.data === "Invalid email or password") {
            form.resetFields();
            message.error(response.data);
          } else {
            console.log(response.data, "h");
            //TODO: Handle Redux
            dispatch(
              setIsLogin({ isLogin: true, userid: response.data.userid })
            );
            moveToProfilePage();
          }
        }))
    ) : (
      // moveToProfilePage()
      <></>
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginDetails]);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    registrationDetails !== "" ? (
      (console.log(registrationDetails),
      (registrationDetails.role = "Employee"),
      axios
        .post("http://localhost:5000/", {
          signup: registrationDetails,
        })
        .then((response) => {
          if (response.data === "Email already registered") {
            message.error(response.data);
          } else {
            setIsLoginForm(true);
            form.resetFields();
          }
          console.log(response);
        }))
    ) : (
      <></>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registrationDetails]);
  // const handleSubmit = ()=>{

  // // console.log('j')
  // }
  return (
    <div className="register">
      <div className="formHeader">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div className="formHeading">
          {!isLoginForm ? <>Registeration Form</> : <>Login Form</>}
        </div>
      </div>
      <div className="formBody">
        <Form name="basic" onFinish={onFinish} autoComplete="off" form={form}>
          {!isLoginForm ? (
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
          {!isLoginForm ? (
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
            <Button type="primary" htmlType="submit">
              {isLoginForm ? <>Login</> : <>Register</>}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
