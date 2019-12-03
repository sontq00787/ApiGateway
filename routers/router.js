var express = require('express');
var router = express.Router()
var insuranceService = require('./insuranceService')
var accountsService = require('./accountsService')
var fullService = require('./fullService') // current full api app
// var authRouter = require('../controller/AuthController')

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use('/insurance/v1/', insuranceService)
router.use('/accounts/v1/', accountsService)
router.use('/api/v2/', fullService)


module.exports = router