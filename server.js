const express = require("express");

const port = 8080;

//APP
const app = express();

app.get('/',(req,res) => {
    res.send("Hello world");
});

app.listen(port);
console.log("Server is Running")