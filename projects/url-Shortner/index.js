require("dotenv").config();
const express = require("express");
const urlRoutes = require("./routes/url");
const connectMongoDb = require("./connection");

const app = express();
const PORT = 3000;
connectMongoDb(process.env.MONGO_URL);

app.use(express.json());

app.use("/url", urlRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
