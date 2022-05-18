import { React, useEffect, useState } from "react";
import "./EmployeesSalariesTable.scss";
import { Button, Table, Modal, Form, Input, InputNumber } from "antd";

const EmployeesSalariesTable = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [salaryDetails, setSalaryDetails] = useState("");
  const [form] = Form.useForm();

  useEffect(() => {
    if (salaryDetails !== "") {
      console.log(salaryDetails);
      setIsModalVisible(false);
    }
  }, [salaryDetails]);

  const onSubmit = (values) => {
    setSalaryDetails(values);
  };

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      employeeid: 32,
      email: "10 Downing Street",
      role: "Software Dev",
      payslip: "Generate Slip",
    },
  ];

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
      render: (text) => (
        <Button
          type="primary"
          onClick={() => {
            setIsModalVisible(true);
          }}
        >
          {text}
        </Button>
      ),
    },
  ];
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
