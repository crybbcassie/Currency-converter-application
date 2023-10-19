import axios from "axios";

export const fetchCurrenciesName = async() => {
    try {
const requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: {
    apiKey: "IcwmX4syP11HBuRrlfU4PPBH4lfytWeT",
  },
};
        const response = await axios.get(
          "https://api.apilayer.com/currency_data/list",
          requestOptions
        );
        return response.data.currencies
    } catch (e) {
      return console.error(e.message);
    }
  }


  