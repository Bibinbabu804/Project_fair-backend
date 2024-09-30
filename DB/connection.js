// import mongoose


const mongoose = require('mongoose')

//   create  a connection string

const connection_string =process.env.CONNECTION_STRINg

//3 CONNECTED TO THE DATABASE 

mongoose.connect(connection_string).then((res)=>{

    console.log('mongodb connection estaablished with pfserver');
    




}).catch((err)=>{

    console.log('Mongodb connection :' + err);
    
})