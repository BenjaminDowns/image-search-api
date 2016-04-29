"use strict"

const express     = require('express')
const app         = express()
const port        =  8080
const path        = require('path')
const imageSearch = require('./routes/imageSearch.js')

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/api/*', imageSearch) 

app.get('/*', function(req,res) {
    res.redirect('/')
})

app.listen(port);
console.log(`listening on port ${port}`)
