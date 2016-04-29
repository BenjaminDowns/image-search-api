'use strict'
const key   = require('./config.js').acct_key
const Bing  = require('node-bing-api')({ accKey: key })

module.exports =
    (req, res) => {
        let searchQuery = req.params[0],
            original = req.originalUrl,
            skip = req.query.offset * 10 || 0

        let fullQuery = `https://api.datamarket.azure.com/Bing/Search/Image?Query=${searchQuery}&$format=JSON`

        Bing.images(searchQuery, { skip: skip, top: 10 }, (error, response, body) => {
            if (error) {
                console.log(error)
                res.send(error)
            } else {
                let searchResult = {}
                body.d.results.forEach((x, i) => {
                    searchResult[i] = {}
                    searchResult[i].text = x.Title
                    searchResult[i].url = x.MediaUrl
                    searchResult[i].context = x.SourceUrl
                    searchResult[i].thumb = x.Thumbnail.MediaUrl
                })
                res.send(searchResult);
            }
        });
    } 
