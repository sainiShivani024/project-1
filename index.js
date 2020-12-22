const express = require("express");
const app = express();

app.get("/", function(req, res){
res.send("hello talking to node.js application");
});

app.listen(8888, function(){
console.log("app listening on 8888");
});