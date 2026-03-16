
const http = require("http");


const userhandler = require("./index");

const server = http.createServer(userhandler);

const port = 3001;

server.listen(port, () => {
  console.log("http://localhost:");
});