import React from "react";
import { Button } from "antd";

export default function AddBtn({ onAdd }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Button
        type="primary"
        shape="circle"
        style={{ maxWidth: "30px", margin: "15px 0 0 15px"}}
        onClick={onAdd}
      >
        +
      </Button>
      <p
        style={{ color: "#4e4e4e", fontSize: "14px", padding: "15px 0 0 15px" }}
      >
        Add currency
      </p>
    </div>
  );
}
