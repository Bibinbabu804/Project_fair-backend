const mongoose = require("mongoose");

//create a schema and a model for users

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  github: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  profilePic: {
    type: String,
  }
});


// model creatin(model =collection in db)
              
      const users=mongoose.model('users',userSchema)

      module.exports=users;