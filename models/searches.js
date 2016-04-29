const mongo = require('mongodb').MongoClient;
const db    = process.envMONGOLAB_URI || 'mongodb://localhost:27017/imageSearch'

