const express = require("express"); //referecing express server from "node-modules"
const app = express(); // call the exprees() server

// calling using use
app.use(
  "/user",
  (req, res, next) => {
    console.log("handler 1");
    next();
  },
  (req, res, next) => {
    console.log("Hander 2");
    next();
    res.send("Handler 2 success");
  },
  (req, res, next) => {
    console.log("3rd handler");
    next();
    console.log("err")
  },(req,res,next)=>{
    console.log("4th handler")
  }
);

//This will only handle GET call to /user
app.get("/user/:id/:name/:passward", (req, res) => {
  console.log(req.params);
  res.send({ firstname: "Shirley", lastname: "Buti" });
});

app.get(/.*fly/, (req, res) => {
  res.send({ firstname: "Shirley", lastname: "Buti" });
});

//post call to /user
app.post("/user", (req, res) => {
  console.log("saved data");
  res.send("data saved successfully");
});

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
