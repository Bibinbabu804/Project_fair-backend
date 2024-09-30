const users = require("../Models/userSchema");

exports.register = async (req, res) => {
  console.log("Inside the register");

  const { username, email, password } = req.body;
  console.log(username, email, password);

  try {
    // Check if the email exists in MongoDB (model)
    const existingUser = await users.findOne({ email });

    if (existingUser) {
      res.status(400).json( "User already exists" );
    } else {
      // Create a new user
      const newUser = new users({
        username,
         email,
          password,
        github: "",
        linkedin: "",
        profilePic: "",
      });

      // Save the new user to the database
      await newUser.save();

      // Send response to client
       res.status(201).json(newUser); // Use 201 for created resources
    }
  } catch (error) {
    console.error(error); // Log the error for debugging
     res.status(500).json({ message: error.message }); // Use 500 for server errors
  }
};
