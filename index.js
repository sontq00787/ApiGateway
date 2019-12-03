var express = require('express');
var app = express();
var router = require('./routers/router')
var bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("Finhay API Gateway")
})

app.use(router)

console.log("Finhay API Gateway run on localhost:3000")

app.listen(3000);