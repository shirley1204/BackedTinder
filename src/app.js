const express = require("express"); //referecing express server from "node-modules"
const app = express(); // call the exprees() server

//calling using use
app.use("/user",(req,res)=>{
    res.send("calling using use")
})

//This will only handle GET call to /user
app.get("/user",(req,res)=>{
    res.send({firstname:"Shirley",lastname:"Buti"})
})

//post call to /user
app.post("/user",(req,res)=>{
    console.log("saved data");
    res.send("data saved successfully")
})

//this will match all the HTTP method API calls to /test
app.use("/test", (req, res) => {
  res.send("Hello from the server");
});

app.use("/hello", (req, res) => {
  res.send("Hello from the server 2");
});

app.use("/hello1", (req, res) => {
  res.send("Hello from the server 3");
});

// app.use("/", (req, res) => {
//   res.send("Start page");
// });

app.listen(3000, () => {
  console.log("server has successfully listening on port");
}); // add port to listen
//
