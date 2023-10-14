import React from "react";
import { InputNumber, Button } from "antd";

export default function AddConvertItem() {
  return (
    <div style={{ display: "flex", width: "400px" }}>
      <div>
        <InputNumber
          addonBefore={<div>USD</div>}
          defaultValue={100}
          size="large"
          style={{ margin: "10px 15px", minWidth: "367px" }}
        />
        <p
          style={{
            color: "#4e4e4e",
            fontSize: "10px",
            margin: "-8px 0 0 20px",
          }}
        >
          US dollar
        </p>
      </div>
      <Button
        shape="circle"
        size="small"
        style={{  margin: "17px 0 0 0" }}
      >
        ×
      </Button>
    </div>
  );
};