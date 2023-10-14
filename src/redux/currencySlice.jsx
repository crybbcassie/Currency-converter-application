import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchcurrencies = createAsyncThunk(
  "currencies/fetchcurrencies",
  async function () {
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = process.env.REACT_APP_FETCH_URL;
    try {
      const response = await axios.get(
        `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`
      );
      console.log(response.data.conversion_rates);
      return response.data.conversion_rates;
    } catch (e) {
      return console.error(e.message);
    }
  }
);

const currencySlice = createSlice({
  name: "currencies",
  initialState: {
    currencies: [],
    status: null,
    error: null,
  },
  reducers: {
    addCurrency(state, action) {
// state.favs.push({
//   search: action.payload.search,
//   result: action.payload.result,
//   sort: action.payload.sort,
// });
    },
    removeCurrency(state, action) {
// state.favs = state.favs.filter((fav) => fav.search !== action.payload.search);
    },
  },
});

export const { addCurrency, removeCurrency } = currencySlice.actions;

export default currencySlice.reducer;
