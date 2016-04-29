"use strict"

const express           = require('express')
const app               = express()
const path              = require('path')
const newSearch         = require('./routes/newSearch.js')
const recentSearches    = require('./routes/recentSearches.js')
const port              = process.env.PORT || 8080

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/api/*', newSearch) 
app.get('/recent', recentSearches)

app.get('/*', function(req,res) {
    res.redirect('/')
})

app.listen(port);
console.log(`listening on port ${port}`)
