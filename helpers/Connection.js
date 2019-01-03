const MongoClient = require('mongodb').MongoClient;

var state = {
    db: null,
}

const Conn = {
    
    connect: function(url, done) {
        if (state.db) return done();

        MongoClient.connect(url, function(err, db) {
            if (err) return done(err);
            state.db = db;
            done();
        })
    },
    
    get: function() {
        return state.db;
    },
    
    close: function() {
        if (state.db) {
            state.db.close(function(err, result) {
                state.db = null;
                state.mode = null;
            })
        }
    }
    
};

module.exports = Conn;