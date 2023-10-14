import React, {useEffect} from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrencies } from "../redux/currencySlice";

export default function UsdTable() {
    const dispatch = useDispatch();
    const currencies = useSelector((state) => state.currencies.currencies);
    
    useEffect(() => {
      dispatch(fetchCurrencies());
    }, [dispatch]);  

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

  const data = currencies.map((item) => ({
    key: item.id,
    currency: item.name,
    cost: item.cost,
  }));

    return <Table columns={columns} dataSource={data} style={{ width: "500px" }} />
  };
