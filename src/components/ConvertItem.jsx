import React from "react";
import { InputNumber } from "antd";

export default function ConvertItem(){
  return (
    <>
      <InputNumber
        addonBefore={<div>USD</div>}
        defaultValue={100}
        size="large"
        style={{ margin: "10px 15px", width: "400px" }}
      />
      <p
        style={{ color: "#4e4e4e", fontSize: "10px", margin: "-8px 0 0 20px" }}
      >
        US dollar
      </p>
    </>
  );
};

