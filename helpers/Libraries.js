const db = require('../mongodb');

const Lib = {
    
    /* Generate ID auto_integer */
    sequenceDoc: function(sequenceName) {
        return new Promise((resolve, reject) => {
            db.get().collection('counters').findAndModify(
                { _id: sequenceName },     // query
                [],               // represents a sort order if multiple matches
                { $inc:{sequence_value:1} },   // update statement
                { new: true },    // options - new to return the modified document
                function(err,doc) {
                    if (err) reject(err);
                    resolve(doc.value.sequence_value);
                }
            );
        });
    }
    
}

module.exports = Lib;