//install express

const express=require('express')

// import usercontroller
const userController=require("../Controllers/userController")




// create router from express

const router = express.Router() 


// create route from each request
//1 register route :http://localhost:3000/register

router.post('/api/register',userController.register)

module.exports =router





