// console.log("why are you here")
const fs = require("fs");


const userhandler= (req,res)=>{
if(req.url === "/"){
     res.write(`
<html>
  <body>

    <form action="/submit" method="POST">

      <label>Username:</label>
      <input type="text" name="username">

      <br><br>

      <label>Gender:</label>

      <input type="radio" name="gender" value="male"> Male
      <input type="radio" name="gender" value="female"> Female
      <input type="radio" name="gender" value="other"> Other

      <br><br>

      <button type="submit">Send</button>

    </form>

  </body>
</html>
  `);
res.end("Home Page");
}
else if(req.url.toLowerCase()==="/submit" && req.method =="POST" ){
const body =[];
req.on('data', chunk =>{
    console.log(chunk)
    body.push(chunk)
});
req.on('end',()=>{
    const fullbody= Buffer.concat(body).toString();
    // console.log(fullbody);
    const parms = new URLSearchParams(fullbody);
    const bodyobject =Object.fromEntries(parms)
    // for(const [key , val] of parms.entries()){
    //     bodyobject[key] = val;
    // }
    console.log(bodyobject);
    fs.writeFileSync('user.txt',JSON.stringify(bodyobject))
})

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
};


module.exports =userhandler;