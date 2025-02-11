const mongoose = require('mongoose')
const restaurant = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    items:{
        type:[String],
        default:[],
        unique:true
    }

})
module.exports = mongoose.model("Restaurant-model",restaurant)