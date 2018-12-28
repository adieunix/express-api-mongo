const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Key = require('../models/Key');
const constant = require('../helpers/Constants');
const db = require('../mongodb');

/* Mongo Test */
router.get('/mongo', function(req, res, next) {
    var collection = db.get().collection('user');
    collection.find().toArray(function(err, docs) {
        console.log('USER', docs)
    });
    res.json('Test Mongo!');
});

router.get('/createColl/:name', function(req, res, next) {
    db.get().createCollection(req.params.name, function(errx, resx) {
        console.log(resx);
        if (errx) throw errx;
        res.render('error', { message: 'Collection created!', error: {status: '', stack: 'name: '+req.params.name} });
        db.close();
    })
});


module.exports = router;
