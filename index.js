const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL ,
     { useNewUrlParser: true, useUnifiedTopology: true },
     () => {
     console.log("connected to  MongoDB")
}
);

app.listen(8800,() => {
    console.log("Backend server is running!");
});