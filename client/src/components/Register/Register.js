import { React, useEffect, useState } from "react";
import "./Register.scss";
import { Button, Form, Input, message, Select } from "antd";
import Logo from "../../assets/images/Logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setIsLogin } from "../../slice/initialiseUserDetailsSlice";
import { useDispatch } from "react-redux";
const { Password } = Input;
const { Option } = Select;

const Register = (props) => {
  const dispatch = useDispatch();
  // const [props.loginForm, setprops.loginForm] = useState(props.loginForm);
  const [form] = Form.useForm();
  let navigate = useNavigate();
  const moveToProfilePage = () => {
    navigate("/profile");
  };
  const [loginDetails, setLoginDetails] = useState("");
  const [registrationDetails, setRegistrationDetails] = useState("");
  const onFinish = (values) => {
    console.log(props.loginForm);
    props.loginForm
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
      axios
        .post("http://localhost:5000/", {
          signup: registrationDetails,
        })
        .then((response) => {
          if (response.data === "Email already registered") {
            message.error(response.data);
          } else {
            // setprops.loginForm(true);
            // props.loginForm = true;
            message.success("Account Sucessfully Registered");
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
  console.log(props.loginForm, "2");
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
        <Form name="basic" onFinish={onFinish} autoComplete="off" form={form}>
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
              <Form.Item
                label="Role"
                name="role"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Select placeholder="Enter user role">
                  <Option value="Human Resource">Human Resource</Option>
                  <Option value="Project Lead">Project Lead</Option>
                  <Option value="Project Manager">Project Manager</Option>
                  <Option value="Software Engineer">Software Engineer</Option>
                  <Option value="Automation Engineer">
                    Automation Engineer
                  </Option>
                </Select>
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
            <Button type="primary" htmlType="submit">
              {props.loginForm ? <>Login</> : <>Register</>}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
