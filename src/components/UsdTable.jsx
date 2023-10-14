import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Currency",
    dataIndex: "currency",
    key: "currency",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Cost",
    dataIndex: "cost",
    key: "cost",
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
