const mongoose = require("mongoose");

const connect = ()=>{
    console.log("database connected")
    return mongoose.connect("mongodb+srv://hemantjayas03:hem123@cluster0.xepnwbp.mongodb.net/users")
}

module.exports = connect;
