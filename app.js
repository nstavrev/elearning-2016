var express = require("express");
var path = require("path");
var app = express();

app.use([express.static(path.join(__dirname, "web")), express.static(path.join(__dirname, "node_modules"))]);

app.use(function (req,res) {
    res.sendFile(path.join(__dirname, "web", "index.html"))
})

app.listen(1337);