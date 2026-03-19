const { getDB } = require("../config/db");
const jwt = require("jsonwebtoken");

// signup
exports.signup = async (req, res) => {
  const db = getDB();

  const { name, email, password } = req.body;

  await db.collection("users").insertOne({
    name,
    email,
    password,
    role: "user",
  });

  res.send("User Registered");
};

// login
exports.login = async (req, res) => {
  const db = getDB();

  const { email, password } = req.body;

  const user = await db.collection("users").findOne({ email });

  if (!user || user.password !== password) {
    return res.send("Invalid Credentials");
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET
  );

  res.json({ token });
};