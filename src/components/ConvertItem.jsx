import React from "react";
import { InputNumber } from "antd";

const ConvertItem = ({data}) => {
  return (
    <>
      <InputNumber
        addonBefore={<div>{data.name}</div>}
        defaultValue={data.cost}
        size="large"
        style={{ margin: "10px 15px", width: "400px" }}
      />
      <p
        style={{ color: "#4e4e4e", fontSize: "10px", margin: "-8px 0 0 20px" }}
      >
        {data.name === 'USD'? `US dollar` :
        data.name === "BYN" ? `Belarussian ruble`:
        data.name === "EUR"? 'Euro' : `Russian ruble`}
      </p>
    </>
  );
};

export default ConvertItem
