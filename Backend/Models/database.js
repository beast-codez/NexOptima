const mongoose = require("mongoose");
require("dotenv").config();
const URL = process.env.URL;

mongoose
  .connect(URL)
  .then(() => {
    console.log("connected to data base");
  })
  .catch((err) => {
    console.log("Mongo Db error", err);
  });
