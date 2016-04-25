import express = require('express')
import path = require('path')
import logger = require('morgan')
const router = express.Router();

const app = express();

router.get('/', function(req, res) {
    res.send('index.html')
})