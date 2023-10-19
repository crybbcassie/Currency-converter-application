import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const fetchConversionRates = createAsyncThunk(
  "currencies/fetchConversionRates",
  async () => {
    try {
      const docRef = doc(db, "currency", "conversion_rates");
      const docSnap = await getDoc(docRef);

      return docSnap.data();
    } catch (error) {
      console.log(error);
      throw error;
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
    addCurrency(state, action) {},
    removeCurrency(state, action) {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchConversionRates.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchConversionRates.fulfilled, (state, action) => {
        state.status = "resolved";
        state.currencies = action.payload;
      })
      .addCase(fetchConversionRates.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const { addCurrency, removeCurrency } = currencySlice.actions;

export default currencySlice.reducer;
