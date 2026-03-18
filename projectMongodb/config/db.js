// MongoDB package import kar rahe hain
const mongodb = require("mongodb");

// MongoClient nikal rahe hain (connection ke liye use hota hai)
const MongoClient = mongodb.MongoClient;


// 🔐 .env file se MongoDB URL le rahe hain (secure way)
const url = process.env.MONGO_URL;


// ye variable database instance store karega
// jab connection ho jayega tab isme db object aa jayega
let _db;


// MongoDB connect function
// callback use kiya hai taaki DB connect hone ke baad hi server start ho
const mongoConnect = (callback) => {

  // MongoDB Atlas se connect ho rahe hain
  MongoClient.connect(url)

    // agar connection successful hua
    .then((client) => {

      console.log("MongoDB Connected");

      // specific database select kar rahe hain
      _db = client.db("airbnbDB");

      // callback call → app.js me server start hoga
      callback();

    })

    // agar error aaya to print karenge
    .catch((err) => {
      console.log("MongoDB Connection Failed ❌", err);
    });
};


// ye function database return karega
// models isko use karke DB access karenge
exports.getDB = () => _db;


// mongoConnect export kar rahe hain
exports.mongoConnect = mongoConnect;