const db = require('../mongodb');

const User = {
    
    getAllUsers: function(start,limit,callback) {
        return db.get()
            .collection('user')
            .find()
            .skip(start)
            .limit(limit)
            .toArray(callback);
    },
    
    addUser: function(data,callback) {
        return db.get()
            .collection('user')
            .insertOne(data, callback);
    }
    
}

module.exports = User;