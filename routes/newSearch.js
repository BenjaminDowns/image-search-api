'use strict'
// const key   = require('../config.js').acct_key
const Bing  = require('node-bing-api')({ accKey: process.env.acct_key })
const saveSearch = require('../models/searches.js')

module.exports =
    
    (req, res) => {
        
        // get query and offset, if designated
        
        let searchQuery = req.params[0],
            skip = req.query.offset * 10 || 0
            
        // save the searchQuery
        
        saveSearch(searchQuery)

        let fullQuery = `https://api.datamarket.azure.com/Bing/Search/Image?Query=${searchQuery}&$format=JSON`
        
        // make the call to the Bing API
        
        Bing.images(searchQuery, { skip: skip, top: 10 }, (error, response, body) => {
            if (error) {
                console.log(error)
                res.send(error)
            } else {
                
                // format the search results
                
                let searchResult = {}
                body.d.results.forEach((x, i) => {
                    searchResult[i] = {}
                    searchResult[i].text = x.Title
                    searchResult[i].url = x.MediaUrl
                    searchResult[i].context = x.SourceUrl
                    searchResult[i].thumb = x.Thumbnail.MediaUrl
                })
                
                // send the formatted results
                
                res.send(searchResult);
                
            }
        });
    } 
