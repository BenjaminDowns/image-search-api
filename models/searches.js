'use strict'

const mongo = require('mongodb').MongoClient;
const db = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/imageSearch'

function saveSearch(query) {
    let time = new Date();
    let newSearch = { query, time }  
    
    mongo.connect(db, (err, db) => {
        if (err) throw err
        else {
            db.collection('searches')
                .insert(newSearch, (err, result) => {
                    if (err) {
                        throw err
                    } else {
                        db.close()
                    }
                }) // end insert
        } // end else
    }) // end mongo.connect
} // end function

module.exports = saveSearch;