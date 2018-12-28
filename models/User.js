//const db = require('../dbconnection'); //reference of dbconnection.js
const db = require('../mongodb');
const md5 = require('md5');

const User = {
    
    createCollection: function(name, callback) {
        return db.get().createCollection("users");
    },

    getAllUsers: function(callback) {
        var collection = db.get().collection('user');
        collection.find().toArray(function(err, docs) {
            console.log('USER', docs);
            return docs;
        });
    },
    
    getUserById: function(id, callback) {
        return db.query("SELECT * FROM api_users WHERE id = ?", [id], callback);
    },
    
    addUser: function(user,callback) {
        return db.query("INSERT INTO api_users (name,email,`password`) VALUES (?,?,?)", [user.name,user.email,md5(user.password)], callback);
    },
    
    updateUser: function(user,callback) {
        return db.query("UPDATE api_users SET name=?,email=?,password=? WHERE id=?", [user.name,user.email,md5(user.password),user.id], callback);
    },
    
    deleteUser: function(id,callback) {
        return db.query("DELETE FROM api_users WHERE id=?",[id],callback);
    },

};

module.exports = User;
