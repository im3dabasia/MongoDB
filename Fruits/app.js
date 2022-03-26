const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Replace the uri string with your MongoDB deployment's connection string.
const url = "mongodb://localhost:27017";

// DB name
const dbName = 'fruitsDB';


// New Mongo client
const client = new MongoClient(url);
console.log("++++++++++++++++++++++++++++")


client.connect(function(err){
    assert.equal(null, err);
    console.log("Connected Successfully to server");

    const db = client.db(dbName);
     
        findDocuments(db, function() {
          client.close();
        });
      });
     
const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Insert some documents
    collection.insertMany([
      {
        name : "Apple",
        score: 9,
        review: "Very Good"
    },
    {
        name : "Banana",
        score: 2,
        review: "Disgusting"
    },
    {
        name : "Pumpkin",
        score: 8,
        review: "Fabulous"
    }
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(3,result.insertedCount);
      assert.equal(3,Object.keys(result.insertedIds).length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });
  }

  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Find some documents
    collection.find({}).toArray(function(err, fruits) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(fruits)
      callback(fruits);
    });
  }