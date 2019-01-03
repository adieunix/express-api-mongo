const db = require('../helpers/Connection');

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
    },
    
    createColl: function(name,callback) {
        return db.get()
            .createCollection(name, callback);
    }
    
}

module.exports = User;