const mongoose = require("mongoose");

const connect = (pass)=>{
    console.log("database connected")
    return mongoose.connect(`mongodb+srv://hemantjayas03:${pass}@cluster0.xepnwbp.mongodb.net/user`)
}

module.exports = connect;
