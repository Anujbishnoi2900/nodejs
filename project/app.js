const express = require("express");

const app = express();

app.set("view engine","ejs");

app.use(express.static("public"));

app.locals.sitename = "Dynamic Product Store";

const products = [
 {name:"Laptop",price:50000},
 {name:"Phone",price:20000},
 {name:"Headphones",price:3000},
 {name:"Smart Watch",price:8000}
];


app.use((req,res,next)=>{

res.locals.user = "Anuj";

next();

});


app.get("/",(req,res)=>{

res.render("home");

});

app.get("/products",(req,res)=>{

res.render("products",{products});

});

app.get("/dashboard",(req,res)=>{

res.render("dashboard");

});
app.use((req , res)=>{
    res.status(404).send("<h1>404 Not Found</h1>");
});


app.listen(3000,()=>{
console.log("Server running on port 3000");
});