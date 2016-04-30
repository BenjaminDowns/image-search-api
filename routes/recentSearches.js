'use strict'

const mongo = require('mongodb').MongoClient;
const db = process.env.MONGODB_URI || 'mongodb://localhost:27017/imageSearch'

module.exports =
    (req, res) => {
        mongo.connect(db, (err, db) => {
            if (err) throw err
            
            // get and return all recent searches, leaving out _id field 

            else {
                db.collection('searches')
                    .find({}, {_id: 0})
                    .toArray((err, result) => {
                        if (err) {
                            throw err
                        }
                        else {
                            res.send(result)
                            db.close()
                        }
                    }) // end toArray
            } // end else
        }) // end mongo.connect
    } // end function

