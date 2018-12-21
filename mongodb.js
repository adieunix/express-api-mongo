const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'oomph';

const connection = MongoClient.connect(url, {useNewUrlParser: true}, function(err, client) {
  console.log("Connected successfully to MongoDB server");

  const db = client.db(dbName);

  client.close();
});

module.exports = connection;