// invote Express frame
const { request, response } = require("express");
const express = require("express");

// create express app-obj
const app = express();


// create router rules
app.get("/", (request, response)=>{
    response.send("hallo express");
});

// start service
app.listen(8000, ()=>{
    console.log("Service Started!");
});