//install express

const express=require('express')

// import usercontroller
const userController=require("../Controllers/userController")


const projectController  = require('../Controllers/projectController')
const jwtMiddlware = require('../MiddleWares/jwtMiddleWare')
const multerConfig =require('../MiddleWares/multerMiddleware')





// create router from express

const router = express.Router() 


// create route from each request
//1 register route :http://localhost:3000/register

router.post('/api/register',userController.register)

router.post('/api/login',userController.login)

router.post('/api/addproject',jwtMiddlware,multerConfig.single('projectImg'),projectController.addProjects)


// add projects route ?





//   get all projects 

router.get('/api/getAllProjects',jwtMiddlware,projectController.getAllProjects)



// get all  projects of a user
       

      router.get('/api/getUserProjects',jwtMiddlware,projectController.getUserProjects)

  





//get home projects
router.get('/api/HomeProjects',jwtMiddlware,projectController.getHomeProjects)


//edit projects

router.put('/api/update/:projectId',jwtMiddlware,multerConfig.single('projectImg'),projectController.editProjects)

//delete project
router.delete('/api/delete/:projectId',jwtMiddlware,projectController.deleteProject)





  


module.exports =router





