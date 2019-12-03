require('dotenv').config();

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

console.log("API Gateway run on localhost:" + process.env.PORT || 3000)

app.listen(process.env.PORT || 3000);