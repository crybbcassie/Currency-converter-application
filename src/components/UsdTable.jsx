import React, {useEffect} from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchConversionRates } from "../redux/currencySlice";

const UsdTable = () => {

    const dispatch = useDispatch();
    const currencies = useSelector(
      (state) => state.currencies.currencies.rates
    );

    const convertedData = currencies
      ? Object.entries(currencies).map(([key, value]) => ({
          name: key.replace("USD", ""),
          cost: value,
        }))
      : [];

    const constCurr = [{ name: "USD", cost: 1 }, ...convertedData];

    useEffect(() => {
      dispatch(fetchConversionRates());
    }, [dispatch]);

  const columns = [
    {
      title: "Currency",
      dataIndex: "currency",
      key: "currency",
      render: (text) => <a>{text}</a>,
      sorter: (a, b) => b.currency.localeCompare(a.currency),
      sortDirections: ["descend"],
    },
    {
      title: "Cost",
      dataIndex: "cost",
      key: "cost",
      sorter: (a, b) => a.cost - b.cost,
    },
  ];

  const data = constCurr.map((item) => ({
    key: item.id,
    currency: item.name,
    cost: item.cost,
  }));

    return <Table 
    columns={columns} 
    dataSource={data} 
    size="small" 
    style={{ width: "500px", padding:"10px" }} 
    />
  };

  export default UsdTable