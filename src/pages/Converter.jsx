import React, { useEffect, useState } from "react";
import { Card } from "antd";
import ConvertItem from "../components/ConvertItem";
import AddConvertItem from "../components/AddConvertItem";
import AddBtn from "../components/UI/AddBtn";
import { useDispatch, useSelector } from "react-redux";
import { fetchConversionRates } from "../redux/currencySlice";

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

const constCurr = [{ name: "USD", cost: 1 }, ...constCurrNoUsd];

  useEffect(() => {
    dispatch(fetchConversionRates());
  }, [dispatch]);

 const handleAddConvertItem = () => {
   setConvertItems([...convertItems, { id: new Date().getTime() }]);
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
      {currencies ? constCurr.map((item) => {
        return <ConvertItem data={item} />;
      }) : <p>loading data...</p>}
      {convertItems.map((item) => (
        <AddConvertItem
          key={item.name}
          data={currencies}
          onRemove={() => handleRemoveConvertItem(item.name)}
        />
      ))}
      <AddBtn onAdd={handleAddConvertItem} />
    </Card>
  );
};

export default Converter