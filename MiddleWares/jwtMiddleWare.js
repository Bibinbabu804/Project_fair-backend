
const jwt =require('jsonwebtoken')


const jwtMiddlware = (req,res,next)=>{
    console.log('inside the jwtmiddleware');

    //get the token from the req 

    let token = req.headers['authorization'].slice(7)
    console.log(token);
    



    // verify tokenn 

    const jwtResponse=jwt.verify(token,`DLUFFY`)


    console.log(jwtResponse);
    req.payload=jwtResponse.userId
    


              
    next()
    
    
}

 module.exports =jwtMiddlware