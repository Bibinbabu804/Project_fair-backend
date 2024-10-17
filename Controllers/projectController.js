const projects = require('../Models/projectSchema')


exports.addProjects =async(req,res)=>{
    console.log('inside project controller');

    const {title,language,website,github,overview}=req.body

    const projectImg=req.file.filename
    const userId=req.payload

    try {

        const existingProject = await projects.findOne({github})
        if(existingProject){
            res.status(406).json('Project already exist')
            
        }else{

            const newProject= new projects({
                title,language,website,overview,projectImg,userId,github
                
              });

              await newProject.save()
              res.status(200).send(newProject)




        }
    } catch (error) {


        res.status(500).json('server error'+ error)
        
    }         




      



    
    



} 


exports.getAllProjects= async(req,res)=>{
    console.log('inside the getallprojects');

    const searchKey=req.query.search
    const query={
        title:{
            $regex:searchKey,
            $options:'i'
        }
    }

    try {
        const getAllProjects= await projects.find(query)
        res.status(200).json(getAllProjects)

        
    } catch (error) {
        res.status(500).json('server error'+ error)
        
    }
    


   }

   exports.getUserProjects =async (req,res)=>{

    console.log('inside the get users project');
   

    const userId=req.payload

    try {
        const getUserProjects= await projects.find({userId})
        res.status(200).json(getUserProjects)
        
    } catch (error) {

        res.status(500).json('server error'+ error)

        
    }
    
   }




    exports.getHomeProjects= async (req,res)=>{
  
           try {

            const getHomeProjects=await projects.find().limit(3)
            res.status(200).json(getHomeProjects)
            
           } catch (error) {
            res.status(500).json('server error'+ error)
            
           }




    }


    // edit projects 


         exports.editProjects =async(req,res)=>{

            console.log('inside edit projects');

            const {title:title,language:language,website:website,github:github,overview:overview,projectImg}=req.body

            const uploadImg=req.file ?  req.file.filename : projectImg

            userId=req.payload
            const {projectId}=req.params

            try {

                const updateProject = await projects.findByIdAndUpdate({_id:projectId},{title,language,website,github,overview,projectImg:uploadImg,userId})
                await updateProject.save()
                res.status(200).json(updateProject)



            } catch (error) {

                res.status(500).json('server error'+ error)
            
                
            }
        
            


         }


        //   delete project


        exports.deleteProject = async(req,res)=>{
            console.log('inside delete project');

            const {projectId} = req.params

            try {
                await projects.findByIdAndDelete({_id:projectId})
                res.status(200).json('project deleted successfully')
                
            } catch (error) {
                
                res.status(500).json('server error'+ error)
            }








            
        }





