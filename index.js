const express = require('express')
let app = express()
const Server= require("./server")
const mongoose = require("mongoose");
var parser = require("body-parser");
const dotenv = require("dotenv").config();
app.use(parser.json());
const cors = require('cors');
app.use(cors());



mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Manager_Account MongoDB Connected");
  })
  .catch((error) => {
    console.log(error);
  });


  app.get('/userDetails', (req, res) => {
    Server.DataGet(req, res);
});

app.post('/userDetails', (req, res) => {
    Server.DataPost(req, res);
});

app.listen(3000,()=>{
    console.log(`server is running on ${3000}`)
})


