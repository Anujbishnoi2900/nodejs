const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const url = process.env.MONGO_URL;

let _db;
const mongoConnect = (callback) => {
  MongoClient.connect(url)
    .then((client) => {

       console.log("MongoDB Connected");
      _db = client.db("airbnbDB"); 
      callback();
    })
    .catch((err) => {
      console.log("MongoDB Connection Failed ❌", err);
    });
};
exports.getDB = () => _db;
exports.mongoConnect = mongoConnect;