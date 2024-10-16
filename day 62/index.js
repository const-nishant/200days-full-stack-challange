const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send(`Hello ${req.query.name}, Welcome to the server`);
});

app.get("/about", (req, res) => {
  return res.send(`This is about page , hello ${req.query.name} how are you?`);
});

const myServer = http.createServer(app);

app.listen(8000, () => console.log("Server Started! at 8000"));
