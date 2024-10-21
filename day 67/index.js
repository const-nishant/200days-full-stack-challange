require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/user");
const connectMongoDb = require("./connection");
const { logReqRes } = require("./middleware/index");

const app = express();

const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

connectMongoDb(process.env.MONGO_URL);

app.use(logReqRes("logupdate.txt"));

//server side rendering example
app.get("/users", (req, res) => {
  const html = `
  <ul>
    ${users.map((user) => {
      return `<li>${user.first_name} ${user.last_name}</li>`;
    })}
  </ul>`;

  return res.send(html);
});

//routes

app.use("/api/users", userRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
