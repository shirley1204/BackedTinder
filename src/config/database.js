const mongoose= require("mongoose");


//connect to the mongoose cluster
const conectDB= async () =>{
   await mongoose.connect("mongodb+srv://shirleybutti12:Admin123456@devtindercluster.0kngx.mongodb.net/devTinder")
}

module.exports = conectDB;

