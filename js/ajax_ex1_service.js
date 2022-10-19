// invote Express frame
const { request, response } = require("express");
const express = require("express");

// create express app-obj
const app = express();


// create router rules
app.get("/server", (request, response)=>{
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.send("hallo Ajax");
});
app.all("/server", (request, response)=>{
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    response.send("hallo Ajax post, test nodemonjjj ");
});
app.all("/server-json", (request, response)=>{
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    const data = {
        name: "lawi"
    };
    response.send(JSON.stringify(data));
});
// start service
app.listen(8000, ()=>{
    console.log("Service Started!");
});