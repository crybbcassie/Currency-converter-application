import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    address: "Sydney No. 1 Lake Park",
  },
];

export default function UsdTable() {  
    return <Table columns={columns} dataSource={data} style={{ width: "500px" }} />
  };

;
