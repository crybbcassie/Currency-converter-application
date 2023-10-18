require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cron = require("cron");
const { db } = require("./firebase");

const port = process.env.REACT_APP_SERVER_PORT || 3005;

const app = express();

app.use(express.json());

const fetchConversionRates = async () => {
  try {

  const requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: {
      apiKey: "IcwmX4syP11HBuRrlfU4PPBH4lfytWeT",
    },
  };

  const response = await axios.get(
    "https://api.apilayer.com/currency_data/live?source=USD&currencies=",
    requestOptions
  );

    const rates = response?.data?.quotes;
    console.log(rates)

    if (rates) {
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

// const cronJob = new cron.CronJob("0 */4 * * *", fetchConversionRates);

// cronJob.start();

app.get(`/fire`, async (req, res) => {
  const data = await fetchConversionRates();
  console.log(data);
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
