const userhandler =(req, res)=>{

if(req.url === "/"){

res.setHeader("Content-Type","text/html");

res.write(`
<html>
<body>

<form action="/sum" method="POST">

<input type="number" name="num1">
<input type="number" name="num2">

<button type="submit">Sum</button>

</form>

</body>
</html>
`);

res.end();

}

if(req.url==="/sum"){
    const body=[];
    req.on("data", chunk=>{
        body.push(chunk);
    })
    req.on("end", ()=>{
        const fullbody = Buffer.concat(body).toString();
        const params = new URLSearchParams(fullbody);

        const num1= Number(params.get("num1"));
        const num2=Number(params.get("num2"));
        const sum = num1+num2;

res.write(`<h1>Sum = ${sum}</h1>`);
res.end();
    })
}

}
module.exports=userhandler;