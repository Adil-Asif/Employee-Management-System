import { React } from "react";
import "./LeavesTable.scss";
import { Button, Table } from "antd";

const LeavesTable = () => {
  const isApprove = false;
  const dataSource = [
    {
      key: "1",
      employeeId: "123",
      name: "Mike",
      role: "Software Dev",
      title: "Need to go to hospital",
      description: 32,
      type: "10 Downing Street",
      status: !isApprove ? "Approve" : "Approved",
    },
  ];

  const columns = [
    {
      title: "Employee ID",
      dataIndex: "employeeId",
      key: "employeeId",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => !isApprove ? <Button type="primary">{text}</Button> : <>{text}</>,
    },
  ];
  return (
    <div className="leavesTable">
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};
export default LeavesTable;
