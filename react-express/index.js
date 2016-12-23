var express = require("express")

var app = express()


app.use('/assets', express.static(__dirname + '/public'));
app.set("view engine", "ejs")


app.get("/", function(req, res){
    res.render("index")
})


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("REACT APP initiates")
})