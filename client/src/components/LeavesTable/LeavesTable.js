import { React, useEffect } from "react";
import "./LeavesTable.scss";
import { Button, Table } from "antd";
import axios from "axios";
import { useState } from "react";


const LeavesTable = () => {
  const isApprove = false;
  // const [dataSource, setDataSource] = useState([
  //   {
  //     helpid: '',
  //     helpTitle: '',
  //     user_id:0,
  //     helpDescription: '',
  //     helpType:'',
  //     isApproved:0
  //   }
  // ]);
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
  useEffect(()=>{
    let i=0;
    axios.get('http://localhost:5000/helpdesk').then(response=>{
      response.data.forEach(element => {
        // setDataSource(element)
        console.log('dataSource:::',dataSource)
        // i++;
      });
    })
  },[])
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
