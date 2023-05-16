const mongoose = require("mongoose");

const connect = ()=>{
    return mongoose.connect("mongodb+srv://hemantjayas03:hem123@cluster0.xepnwbp.mongodb.net/users")
}

module.exports = connect;
