import axios from "axios";
const requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: {
    apiKey: process.env.REACT_APP_APILAYER_KEY,
  },
};

export const fetchCurrenciesName = async() => {
    try {
        const response = await axios.get(
          "https://api.apilayer.com/currency_data/list",
          requestOptions
        );
        return response.data.currencies
    } catch (e) {
      return console.error(e.message);
    }
  }


  // export const fetchConvertedCurrency = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`,
  //       requestOptions
  //     );
  //     console.log(response.data.result)
  //     return response.data.result;
  //   } catch (e) {
  //     return console.error(e.message);
  //   }
  // };


  