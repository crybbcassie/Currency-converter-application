import React, {useEffect, useState} from "react";
import { Button, Input, Select } from "antd";
import { fetchCurrenciesName } from "../utils/helpers";
const {Option} = Select

const AddConvertItem = ({ onRemove, data }) => {
  const [price, setPrice] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [currenciesNames, setCurrenciesNames] = useState([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const names = await fetchCurrenciesName();
        setCurrenciesNames(names);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCurrencies();
  }, []);

  const handleSelectChange = (value) => {
    const selectedCurrency = data.find((item) => item.name === value);
    setPrice(selectedCurrency.cost.toString());
    setSelectedCurrency(value);
  };

  const selectBefore = (
    <Select
      size="small"
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
    <>
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
      <p
        style={{ color: "#4e4e4e", fontSize: "10px", margin: "-8px 0 0 20px" }}
      >
        {currenciesNames[selectedCurrency]}
      </p>
    </>
  );
};


export default AddConvertItem