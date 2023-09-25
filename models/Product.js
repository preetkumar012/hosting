const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    address: {
        street: String,
        city: String,
        zipcode: String,
       
    }
})

const Product = mongoose.model("admin", productSchema)
module.exports = Product