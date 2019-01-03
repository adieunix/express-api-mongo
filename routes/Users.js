const express = require('express');
const router = express.Router();
const constant = require('../helpers/Constants');
const Model = require('../models/Users');
const Lib = require('../helpers/Libraries');

/* Create Collection */
router.get(constant.API_CREATE_COLL+'/:name', function(req, res, next) {
    Model.createColl(req.params.name, function(err, result) {
        if (err) throw err;
        res.render('error', { message: 'Collection created!', error: {status: '', stack: 'name: '+req.params.name} });
    });
});

/* Add User */
router.post(constant.API_ADD_USER, async function(req,res,next) {
    var arr = [];
    var dat = {
        _id: await (Lib.sequenceDoc('user')),
        name: req.body.name,
        email: req.body.email
    }
    
    Model.addUser(dat,function(errx, result) {
        if (errx) throw errx;
        arr.push({
            data: result.ops,
            count: result.insertedCount,
            id: result.insertedId
        });
        res.json(arr);
    });
});

/* Get All Users */
router.get(constant.API_GET_ALL_USERS, function(req, res, next) {
    var par = {
        start: (req.query.start) ? req.query.start : 0,
        limit: (req.query.limit) ? req.query.limit : 0
    }    
    
    Model.getAllUsers(
        Number(par.start),
        Number(par.limit),
        function(err, result) {
            if (err) throw err;
            res.json(result);    
        }
    );
});


module.exports = router;
