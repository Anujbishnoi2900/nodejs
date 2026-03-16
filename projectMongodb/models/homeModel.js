// MongoDB database access function import kar rahe hain
const { getDB } = require("../config/db");

// MongoDB me id handle karne ke liye ObjectId import karte hain
const mongodb = require("mongodb");

class Home {

  // constructor jab new Home banega tab ye values assign hongi
  constructor(title, price, location) {
    this.title = title;      // home ka title
    this.price = price;      // home ki price
    this.location = location; // home ki location
  }

  // database me new home save karne ka method
  save() {

    const db = getDB(); // database connection le rahe hain

    // homes collection me document insert kar rahe hain
    return db.collection("homes").insertOne(this);

  }

  // saare homes database se fetch karne ka method
  static fetchAll() {

    const db = getDB(); // database connection

    // collection se saare documents fetch
    return db.collection("homes").find().toArray();

  }

  // id ke basis par single home find karna
  static getHomeById(id) {

    const db = getDB();

    return db.collection("homes")
      .find({ _id: new mongodb.ObjectId(id) }) // id ko ObjectId me convert karna zaruri hai
      .next(); // first result return karega

  }

  // home delete karna
  static deleteHome(id) {

    const db = getDB();

    return db.collection("homes")
      .deleteOne({ _id: new mongodb.ObjectId(id) });

  }

  // home update karna
  static updateHome(id, data) {

    const db = getDB();

    return db.collection("homes")
      .updateOne(
        { _id: new mongodb.ObjectId(id) }, // kaunsa document update karna hai
        {
          $set: {
            title: data.title,
            location: data.location,
            price: data.price
          }
        }
      );

  }

}

// model export kar rahe hain taaki controller use kar sake
module.exports = Home;