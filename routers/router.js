var express = require('express');
var router = express.Router()
var d3Router = require('./d3Service')
var fullService = require('./fullService') // current full api app
// var authRouter = require('../controller/AuthController')

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use('/insurance/v1/', d3Router)
router.use('/api/v2/', fullService)

module.exports = router