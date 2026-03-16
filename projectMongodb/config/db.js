// MongoDB package import kar rahe hain
const mongodb = require("mongodb");

// MongoDB client class nikal rahe hain jo database se connect karne ke liye use hoti hai
const MongoClient = mongodb.MongoClient;


// MongoDB Atlas connection string
// isme username, password aur cluster address hota hai
const url = "mongodb+srv://anujbeniwal96929_db_user:Anuj%402800@projectmongodb.qedmi6v.mongodb.net/airbnbDB?retryWrites=true&w=majority";


// ye variable database instance store karega
// jab database connect ho jayega tab isme db object store hoga
let _db;


// MongoDB se connect karne ka function
// callback isliye use kiya gaya hai taaki database connect hone ke baad server start ho
const mongoConnect = (callback) => {

  // MongoDB Atlas se connection establish karna
  MongoClient.connect(url)

    // agar connection successful hua to ye block run hoga
    .then((client) => {

      // console me message show karega ki database connect ho gaya
      console.log("MongoDB Connected");

      // client.db() se specific database select karte hain
      // yaha hum airbnbDB database use kar rahe hain
      _db = client.db("airbnbDB");

      // callback function call kar rahe hain (app.js me server start karne ke liye)
      callback();

    })

    // agar connection fail ho jaye to error console me show karega
    .catch((err) => {
      console.log(err);
    });
};


// ye function database instance return karta hai
// models aur controllers isko call karke database access karte hain
exports.getDB = () => _db;


// mongoConnect function export kar rahe hain taaki app.js me use ho sake
exports.mongoConnect = mongoConnect;