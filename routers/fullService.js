var express = require('express');
var router = express.Router()
const apiAdapter = require('./adapter')
// const isAuthorized = require('../controller/requestAuthenticator')

const BASE_URL = 'http://localhost:8080'
const api = apiAdapter(BASE_URL)

// router.get('/users', isAuthorized, (req, res) => {
router.get('*', (req, res) => {
    // console.log(req.path)
    api.get('/api/v2.1' + req.path).then(resp => {
        res.send(resp.data)
    })
}).post('*', (req, res) => {
    api.get('/api/v2.1' + req.path).then(resp => {
        res.send(resp.data)
    })
}).put('*', (req, res) => {
    api.get('/api/v2.1' + req.path).then(resp => {
        res.send(resp.data)
    })
})


module.exports = router