const express = require('express') //referecing express server from "node-modules"
const app = express() // call the exprees() server 

// app.use("/",(req,res)=>{
// res.send("Start page");
// })

app.use("/test",(req,res)=>{
res.send("Hello from the server");
})

app.use("/hello",(req,res)=>{
    res.send("Hello from the server 2");
    })

    app.use("/hello1",(req,res)=>{
        res.send("Hello from the server 3");
        })

app.listen(3000,() =>{
    console.log("server has successfully listening on port")
}); // add port to listen 
//