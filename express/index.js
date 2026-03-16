const express = require("express");
const app = express();
const pars = require("body-parser");

// body parser middleware
app.use(pars.urlencoded({ extended: true }));

app.use("/", (req,res,next)=>{
    console.log("second middleware", req.url, req.method);
    next();
});

app.use("/", (req,res,next)=>{
    console.log("third middleware", req.url, req.method);
    next();
});

// GET route
app.get("/contact-us",(req,res)=>{
    res.send(`
    <form action="/contact-us" method="POST">
    <input type="text" name="username">
    <input type="text" name="email">
    <button>Send</button>
    </form>
    `);
});

// POST route
app.post("/contact-us",(req,res)=>{
    console.log(req.body);
    res.send("Form submitted");
});

app.listen(3002, ()=>{
    console.log("Server running on 3002");
});