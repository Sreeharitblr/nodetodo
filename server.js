/*treditional server creation*/

// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader ('Conrenr-Type','text/plane');
//     res.write('Hello World');
//     res.end();
// });

// server.listen(port,hostname,()=>{
//     console.log(`server is running at http ://${hostname}:${port}/`);
// });

/** using express for creating server*/
const { Select, Insert} = require("./database");
const express = require("express");
var bodyParser = require("body-parser");
const router = express.Router();
const app = express();
const port = 3000;

let jsonParser = bodyParser.json();
let dbResult = [];

Select((result) => {
  dbResult = result;
});

app.use(express.json());

app.get("/", (req, res) => {
  dbResult.map((ele) => {
    res.send(`<div>${ele.title}</div>`);
  });
});

app.post("/", (req, res) => {
  Insert(req.body.name, (result) => {
    dbResult = result;
  });

  dbResult.map((ele) => {
    res.send(`<div>${ele.title}</div>`);
  });
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
