const express = require("express");
const app = express();

const userRouter= require("./routes/userRouter");
const hostrouter = require("./routes/hostrouter");

app.use((req, res, next) => {
    console.log("first middleware start", req.url, req.method);
    next();
});

app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use(hostrouter);
app.use((req , res , next)=>{
    res.status(404).send("<h1>not founded</h1>")
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
