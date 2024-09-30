require("dotenv").config();

// import express

const express = require("express");

//import cors

const cors = require("cors");

//create ann app using express

const pfServer = express();

//import DB 
require('./DB/connection')

// import routes
const router=require('./Routes/router')









// use of app

pfServer.use(cors());
pfServer.use(express.json()); // pa   rse
pfServer.use(router)

// define port
const PORT = 3000 || process.env.PORT;

//Define lISTEN

pfServer.listen(PORT, (req, res) => {
  console.log("pf server started at port " + PORT);
});


pfServer.get('/',(req,res)=>{
    
    res.status(200).send(`<h1> Project fair service  ... waiting for the client's response</h1>`)
    
})


  