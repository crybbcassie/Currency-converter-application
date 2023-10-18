import React, {useState} from "react";
import { Button, Input, Select } from "antd";
const {Option} = Select

const AddConvertItem = ({ onRemove, data }) => {
  const [price, setPrice] = useState("");

  const handleSelectChange = (value) => {
    const selectedCurrency = data.find((item) => item.name === value);
    setPrice(selectedCurrency.cost.toString());
  };

  const selectBefore = (
    <Select
      size='small'
      defaultValue={null}
      style={{
        width: 80,
      }}
      onChange={handleSelectChange}
    >
      {data.map((item) => (
        <Option value={item.name} key={item.name}>
          {item.name}
        </Option>
      ))}
    </Select>
  );

  return (
    <div style={{ display: "flex", width: "400px" }}>
      <div>
        <Input
          addonBefore={selectBefore}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          size="large"
          style={{ margin: "10px 15px", minWidth: "340px" }}
        />
      </div>
      <Button
        shape="circle"
        size="small"
        style={{ margin: "17px 20px" }}
        onClick={onRemove}
      >
        ×
      </Button>
    </div>
  );
}

export default AddConvertItem