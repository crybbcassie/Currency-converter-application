import React, { useEffect } from "react";
import { Card } from "antd";
import ConvertItem from "../components/ConvertItem";
import AddConvertItem from "../components/AddConvertItem";
import AddBtn from "../components/UI/AddBtn";
import { useDispatch, useSelector } from "react-redux";
import { fetchcurrencies } from "../redux/currencySlice";

export default function Converter(){
  const dispatch = useDispatch()
  const currencies = useSelector((state) => state.currencies.currencies);
  console.log(currencies);

  useEffect(() => {
    dispatch(fetchcurrencies());
  })

  return (
    <Card
      bordered={false}
      bodyStyle={{
        display: "flex",
        flexDirection: "column",
        marginTop: "-16px",
        maxWidth: "500px",
      }}
    >
      <ConvertItem />
      <ConvertItem />
      <ConvertItem />
      <ConvertItem />
      <AddConvertItem />
      <AddBtn />
    </Card>
  );
};
