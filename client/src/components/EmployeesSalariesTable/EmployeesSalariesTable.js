import { React, useEffect, useState } from "react";
import "./EmployeesSalariesTable.scss";
import axios from "axios";
import { Button, Table, Modal, Form, Input, InputNumber } from "antd";

const EmployeesSalariesTable = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [salaryDetails, setSalaryDetails] = useState("");
  const [employeeId1, setEmployeeId]= useState("");
  const [employeeData, setEmployeeData] = useState([]);
  const [form] = Form.useForm();
  useEffect(() => {
    axios.get("http://localhost:5000/userDetails").then((response) => {
      console.log(response.data);
      setEmployeeData(response.data);
      //TODO: Update state here and render data
      console.log("1");
    });
  }, []);
  useEffect(() => {
    if (salaryDetails !== "") {
      console.log(salaryDetails);
      setIsModalVisible(false);
      axios
        .post("http://localhost:5000/salary", {month : salaryDetails.month, baseSalary: salaryDetails.baseSalary, reimbursements: salaryDetails.reimbursements,bonuses: salaryDetails.bonuses,  userId: employeeId1})
        .then((response) => {
          console.log(response.data);

          //TODO: Update state here and render data
          console.log("1");
        });
    }
  }, [salaryDetails]);

  const onSubmit = (values) => {
    setSalaryDetails(values);
  };

  const dataSource = [{}];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Employee Id",
      dataIndex: "employeeid",
      key: "id",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Payslip",
      dataIndex: "payslip",
      key: "payslip",
      render: (text,employee) => (
        <Button
          type="primary"
          onClick={() => { 
            setEmployeeId(employee.employeeid);
            setIsModalVisible(true);
          }}
        >
          {text}
        </Button>
      ),
    },
  ];
  for (let i = 0; i < employeeData.length; i++) {
    dataSource.push({
      key: i,
      name: employeeData[i].username,
      employeeid: employeeData[i].userId,
      email: employeeData[i].emailaddress,
      role: employeeData[i].role,
      payslip: "Generate Slip",
    });
  }
  return (
    <div className="employeesSalariesTable">
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 10 }}
      />
      <Modal
        centered
        title="Generate Pay Slip"
        visible={isModalVisible}
        okText="Generate"
        cancelText="Cancel"
        onCancel={() => {
          setIsModalVisible(false);
        }}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onSubmit(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
        className="generateSalaryForm"
      >
        <div className="salaryForm">
          <Form form={form}>
            <Form.Item
              name="month"
              label="Month"
              rules={[
                {
                  required: true,
                  message: "Please enter montj",
                },
              ]}
            >
              <Input placeholder="Enter Month" />
            </Form.Item>
            <Form.Item
              name="baseSalary"
              label="Base Salary"
              rules={[
                {
                  required: true,
                  message: "Please enter base salary",
                },
              ]}
            >
              <InputNumber placeholder="Enter Base Salary" />
            </Form.Item>
            <Form.Item
              name="reimbursements"
              label="Reimbursements"
              rules={[
                {
                  required: true,
                  message: "Please enter reimbursements",
                },
              ]}
            >
              <InputNumber placeholder="Enter Reimbursements" />
            </Form.Item>
            <Form.Item
              name="bonuses"
              label="Bonuses"
              rules={[
                {
                  required: true,
                  message: "Please enter bonuses",
                },
              ]}
            >
              <InputNumber placeholder="Enter Bonuses" />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};
export default EmployeesSalariesTable;
