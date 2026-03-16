const http = require("http")
const userhandler=  require('./handle')
const server = http.createServer(userhandler);

const port =4002;
server.listen(port,()=>{
    console.log("start ")
})