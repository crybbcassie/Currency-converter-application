import React, { useEffect, useState } from "react";
import { InputNumber } from "antd";
import { fetchCurrenciesName } from "../utils/helpers";

const ConvertItem = ({data}) => {
  const [currenciesNames, setCurrenciesNames] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState(data.name);

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
        {currenciesNames[selectedCurrency]}
      </p>
    </>
  );
};

export default ConvertItem
