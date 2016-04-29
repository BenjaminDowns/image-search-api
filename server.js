"use strict";
let express     = require('express');
let app         = express();
let port        =  8080;
let path        = require('path')
let imageSearch = require('./imageSearch.js')

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/*', imageSearch) 

app.get('/*', function(req,res) {
    res.redirect('/')
})

app.listen(port);
console.log(`listening on port ${port}`)
