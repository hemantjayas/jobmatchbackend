require('dotenv').config()
const mongoose = require("mongoose");
const express = require("express");
const connect = require("./configs/db")
const app = express();
const PORT = process.env.PORT || 8000;
const PASSWORD= process.env.PASSWORD




const userController=  require("./src/controllers/userController")





app.use(express.json());

app.use("/users", userController);



app.listen(PORT, async function () {
    await connect(PASSWORD)
    
    console.log(`listening on port ${PORT}`)
});







