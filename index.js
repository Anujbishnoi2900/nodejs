console.log("why are you here")

const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
if(req.url === "/"){
     res.write(`
    <html>
      <body>
        <form action="/submit" method="POST">
          <input type="text" name="username">
          <button type="submit">Send</button>
        </form>
      </body>
    </html>
  `);
res.end("Home Page");
}
else if(req.url.toLowerCase()==="/submit" && req.method =="POST" ){
    fs.writeFileSync("user.txt", "parshant");
    res.statusCode=302;
    res.setHeader('location','/')
    res.end();
}
else if(req.url==="/about"){
    res.write("this is your about page ")
    res.end();
}
else{
     res.write("you are learn this  ")
    res.end();

}
});
const port =3000;
server.listen(port,()=>{
    console.log(`http://localhost:3000`);
});