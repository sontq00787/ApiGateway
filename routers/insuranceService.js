var express = require('express');
var router = express.Router()
const apiAdapter = require('./adapter')
// const isAuthorized = require('../controller/requestAuthenticator')

const BASE_URL = process.env.SERVICE_INSURANCE || 'http://localhost:3001'
const api = apiAdapter(BASE_URL)

// router.get('/users', isAuthorized, (req, res) => {
router.get('*', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

module.exports = router