import React from "react";
import { Card } from "antd";
import UsdTable from "../components/UsdTable";

const UsdTab = () => {
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
      <UsdTable/>
    </Card>
  );
};

export default UsdTab
