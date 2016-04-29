"use strict"

const express     = require('express')
const app         = express()
const port        =  8080
const path        = require('path')
const imageSearch = require('./routes/imageSearch.js')
const recent      = require('./routes/recent.js')

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/api/*', imageSearch) 

app.get('/recent', recent)

app.get('/*', function(req,res) {
    res.redirect('/')
})

app.listen(port);
console.log(`listening on port ${port}`)
