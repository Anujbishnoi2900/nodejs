const { MongoClient } = require("mongodb");

let db;

const connectDB = async () => {
  try {
    // ✅ same variable name
    const client = new MongoClient(process.env.MONGO_URI);

    await client.connect();
    db = client.db();

    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ DB Error:", err.message);
    process.exit(1);
  }
};

const getDB = () => db;

module.exports = { connectDB, getDB };