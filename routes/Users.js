const express = require('express');
const router = express.Router();
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

/* Create Collection */
router.get(constant.API_CREATE_COLL+'/:name', function(req, res, next) {
    db.get().createCollection(req.params.name, function(errx, resx) {
        console.log(resx);
        if (errx) throw errx;
        res.render('error', { message: 'Collection created!', error: {status: '', stack: 'name: '+req.params.name} });
        db.close();
    })
});

/* Add User */
router.post(constant.API_ADD_USER, function(req,res,next) {
    var dat = {
        name: req.body.name,
        email: req.body.email
    }
    db.get().collection('user').insertOne(dat, function(errx, result) {
        if (errx) throw errx;
        console.log("1 document inserted",result.insertedId);
        res.json(result.insertedId);
    });
});

/* Get All Users */
router.get(constant.API_GET_ALL_USERS, function(req, res, next) {
    console.log('GET START: ',req.query.start);
    var par = {
        start: (req.query.start) ? req.query.start : 0,
        limit: (req.query.limit) ? req.query.limit : 0
    }
    db.get().collection('user').find().skip(Number(par.start)).limit(Number(par.limit)).toArray(function(err, result) {
        if (err) throw err;
        res.json(result);
    });
});


module.exports = router;
