"use strict"
const mongoose = require("mongoose");
// const DB = "mongodb+srv://jewar0123:Avnish1234@cluster1.gcfs3q4.mongodb.net/hostapi?retryWrites=true&w=majority";
// const DB="mongodb+srv://jewar0123:Avnish1234@cluster0.gcfs3q4.mongodb.net/preet?retryWrites=true&w=majority"
const DB="mongodb+srv://noida3611:Preet1234@cluster.igpem0c.mongodb.net/hostapi?retryWrites=true&w=majority"
mongoose.connect(DB).then(() => {
    setTimeout(() => {
      console.log("database connected successfully");
    }, 2000);

}).catch((error) => {
    console.log({ error: "database is not connected" })
});

// aHGuZn2WTTOMFBc6