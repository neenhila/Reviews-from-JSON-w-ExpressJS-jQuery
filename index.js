var bodyParser = require("body-parser")
var express = require("express");
var app = express();

app.set('view engine', 'ejs')

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }))



app.listen();

app.get("/", (req, res) => {
    res.render("index")
})

