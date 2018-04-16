var express = require('express');
var router = express.Router();

const Mongo = require('mongodb');
const MongoClient = Mongo.MongoClient;
const assert = require('assert');

// For Cross Origin
router.all( '/*', function ( req, res, next ) {
  res.contentType( 'json' );
  res.header( 'Access-Control-Allow-Origin', '*' );
  res.header('Origin, X-Requested-With, Content-Type, Accept');

  next();
});


const _url = 'mongodb://tm_mongodb:27017/feed';

router.get('/', (req, res, next) => {
  MongoClient.connect(_url, (err, client) => {
    const db = client.db('feed');
  
    db.collection('feeds', (err, collection) => {
      collection.find().sort({ 'feed.id_str': -1 }).toArray((err, docs) => {
        res.send(docs);
      });
    });
  });
});

module.exports = router
