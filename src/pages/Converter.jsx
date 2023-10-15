import React, { useEffect, useState } from "react";
import { Card } from "antd";
import ConvertItem from "../components/ConvertItem";
import AddConvertItem from "../components/AddConvertItem";
import AddBtn from "../components/UI/AddBtn";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrencies } from "../redux/currencySlice";

export default function Converter(){
  const dispatch = useDispatch()
  const currencies = useSelector((state) => state.currencies.currencies);
  const [convertItems, setConvertItems] = useState([]);

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch])

 const constCurr = currencies.filter((curr) => {
   return ["USD", "RYB", "BYN", "EUR"].includes(curr.name);
 });

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
      {constCurr.map((item) => {
        return <ConvertItem data={item} />;
      })}
      {convertItems.map((item) => (
        <AddConvertItem
          key={item.id}
          data={currencies}
          onRemove={() => handleRemoveConvertItem(item.id)}
        />
      ))}
      <AddBtn onAdd={handleAddConvertItem} />
    </Card>
  );
};
