"use strict";
var express = require('express');
var router  = express.Router();
var app     = express();
var port    =  8080;
var path    = require('path')

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

router.get('/api', function(req, res) {
    res.send('hello from the api route')
})

router.get('/*', function(req,res) {
    res.send('hello from the wildcard')
})

app.use('/', router)

app.listen(port);
console.log(`listening on port ${port}`)
