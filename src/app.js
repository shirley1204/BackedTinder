const express = require("express"); //referecing express server from "node-modules"
const connectDB=require("./config/database")
const app = express(); // call the exprees() server
const User=require("./models/user")

app.post("/signUp",async(req,res)=>{
//Creating a new instance of User Model
const user=new User({
  firstName:"Virat",
  lastName:"Kohli",
  emailId:"Virat@gmail.com",
  password:"Virat@123",
  age:28,
  gender:"Male"
})
try{
await user.save();
res.send("User added Successfully");
}
catch (err){
  res.status(400).send("Error Saving the user :" + err.message)
}
})

connectDB().then(()=>{
  console.log("Database Connection established...");
  app.listen(3000, () => {
    console.log("server has successfully listening on port");
  }); // add port to listen
  
  }).catch((err)=>{
  console.log("Database cannot be connected!!!!!")
  })


