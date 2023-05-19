const mongoose = require("mongoose");
const str = process.env.DBURL
const connect = ()=>{
    console.log("database connected")
    return mongoose.connect(str)
}

module.exports = connect;
