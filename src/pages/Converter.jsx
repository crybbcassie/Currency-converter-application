import React, { useEffect, useState } from "react";
import { Card } from "antd";
import ConvertItem from "../components/ConvertItem";
import AddConvertItem from "../components/AddConvertItem";
import AddBtn from "../components/UI/AddBtn";
import { useDispatch, useSelector } from "react-redux";
import { fetchConversionRates } from "../redux/currencySlice";
import {v4} from 'uuid'

const Converter = () => {  
  const dispatch = useDispatch();
  const currencies = useSelector((state) => state.currencies.currencies.rates);
  const [convertItems, setConvertItems] = useState([]);

  const convertedData = currencies
    ? Object.entries(currencies).map(([key, value]) => ({
        name: key.replace("USD", ""),
        cost: value,
      }))
    : [];

const constCurrNoUsd = convertedData ? convertedData.filter((curr) => {
  return ["RUB", "BYN", "EUR"].includes(curr.name);
}) : [];

const selectedCurr = [{ name: "USD", cost: 1 }, ...constCurrNoUsd];
const allCurr = [{ name: "USD", cost: 1 }, ...convertedData];

  useEffect(() => {
    dispatch(fetchConversionRates());
  }, [dispatch]);

 const handleAddConvertItem = () => {
   setConvertItems([...convertItems, { id: v4() }]);
 };

 const handleRemoveConvertItem = (id) => {
   setConvertItems(convertItems.filter((item) => item.id !== id));
 };

  return (
    <Card
      bordered={false}
      bodyStyle={{
        display: "flex",
        flexDirection: "column",
        marginTop: "-16px",
        width: "500px",
      }}
    >
      {currencies ? (
        selectedCurr.map((item) => {
          return <ConvertItem data={item} />;
        })
      ) : (
        <p>loading data...</p>
      )}
      {convertItems.map((item) => (
        <AddConvertItem
          key={item.name}
          data={allCurr}
          onRemove={() => handleRemoveConvertItem(item.id)}
        />
      ))}
      <AddBtn onAdd={handleAddConvertItem} />
    </Card>
  );
};

export default Converter