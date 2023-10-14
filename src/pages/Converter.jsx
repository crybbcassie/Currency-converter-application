import React from "react";
import { Card } from "antd";
import ConvertItem from "../components/ConvertItem";
import AddConvertItem from "../components/AddConvertItem";
import AddBtn from "../components/UI/AddBtn";

export default function Converter(){
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
