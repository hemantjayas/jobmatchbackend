const express =  require("express");

const User = require("../models/usermodels");

const router = express.Router();

router.post("/", async (req, res)=>{
    try {
        const user = await User.create(req.body);
        res.status(201).send(user);
    } catch (e) {
        res.status(500).json({message:e.message})
    }
});



router.get("/", async (req, res)=>{
    try {
        const users = await User.find().lean().exec();
        res.send(users);
    } catch (e) {
        res.status(500).json({message:e.message})
    }
});


module.exports = router