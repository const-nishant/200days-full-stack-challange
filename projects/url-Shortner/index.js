require("dotenv").config();
const express = require("express");
const urlRoutes = require("./routes/url");
const connectMongoDb = require("./connection");
const url = require("./models/url");
const newRoute = require("./routes/newRoute");
const userRoute = require("./routes/user");
const path = require("path");

const app = express();
const PORT = 3000;
connectMongoDb(process.env.MONGO_URL);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.resolve("./view"));

app.use("/url", urlRoutes);
app.use("/", newRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
