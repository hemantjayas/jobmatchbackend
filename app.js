// const mongoose = require("mongoose");
const express = require("express");
const connect = require("./configs/db")
const app = express();




const userController=  require("./src/controllers/userController")




app.use(express.json());

app.use("/users", userController);


app.listen("1234", async function () {
    await connect()
    console.log("listening on port 1234")
});







