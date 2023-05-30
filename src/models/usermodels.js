const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    first_name: {type: String, required: true },
    last_name: {type: String, required: true },
    gender: {type: String, required: true },
    dob: {type: String, required: true}

},
{
    versionKey: false,
    timestamps: true,
});


const User = mongoose.model("user", userSchema); // users schema 

module.exports = User

