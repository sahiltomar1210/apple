const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema({
    name:String,
    description:String,
    price:Number,
    category:String,
    picture:String
});


const PropertyInfo = mongoose.model("ProductInfo", propertySchema);

module.exports = PropertyInfo;