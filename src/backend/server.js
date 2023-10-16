require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cron = require("cron");
const { db } = require("./firebase");

const port = process.env.SERVER_PORT || 3000;

const app = express();

app.use(express.json());

const fetchConversionRates = async () => {
  try {
    const response = await axios.get(
      `https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_API_KEY}/latest/USD`
    );
    
    const rates = response?.data?.conversion_rates;

    if (rates && Object.keys(rates).length > 0) {
      const conversionRatesRef = db
        .collection("currency")
        .doc("conversion_rates");

      await conversionRatesRef.set({
        rates,
        timestamp: new Date().toString(),
      });
    }
  } catch (error) {
    console.error(error);
  }
};

const cronJob = new cron.CronJob("0 */4 * * *", fetchConversionRates);

cronJob.start();

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});