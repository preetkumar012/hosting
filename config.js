"use strict"
const mongoose = require("mongoose");
const DB = "mongodb://0.0.0.0:27017/e-comm";
mongoose.connect(DB).then(() => {
    setTimeout(() => {
      console.log("database connected successfully");
    }, 2000);

}).catch((error) => {
    console.log({ error: "database is not connected" })
});

