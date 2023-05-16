const mongoose = require("mongoose");

const connect = ()=>{
    console.log("database connected")
    return mongoose.connect(`${process.env.DBURL}`)
}

module.exports = connect;
