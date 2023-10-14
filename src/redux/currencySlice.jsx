import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCurrencies = createAsyncThunk(
  "currencies/fetchcurrencies",
  async function () {
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = process.env.REACT_APP_FETCH_URL;
    try {
      const response = await axios.get(
        `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`
      );
      const result = Object.entries(response.data.conversion_rates).map(
        ([name, cost], index) => ({
          id: index + 1,
          name,
          cost,
        })
      );
      return result;
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
      // state.currencies.push({
      //   search: action.payload.search,
      //   result: action.payload.result,
      //   sort: action.payload.sort,
      // });
    },
    removeCurrency(state, action) {
      // state.currencies = currencies.favs.filter((fav) => fav.search !== action.payload.search);
    },
  },
  extraReducers: {
    [fetchCurrencies.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchCurrencies.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.currencies = action.payload;
    },
    [fetchCurrencies.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    }}
});

export const { addCurrency, removeCurrency } = currencySlice.actions;

export default currencySlice.reducer;
