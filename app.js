//jshint esversion:6
const express = require("express");
cont hello=Number;
const coursesRouter= require("./routes/courses");
const bodyParser=require('body-parser')
require("dotenv").config();
const mongoose= require('mongoose');
const app = express();

app.use(bodyParser.json)
app.use("/c",coursesRouter);

mongoose.connect(process.env.DB_CONNECTION_URL,()=>{
    console.log("connected to database:");
});

app.listen(process.env.PORT, function () {
    console.log("server is running");
});
