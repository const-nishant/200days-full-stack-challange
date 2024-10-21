require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const port = 3000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

// mongoose
//   .connect(" mongodb://127.0.0.1:27017/")
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log(err));

//schema
const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

//model
const User = mongoose.model("user", userSchema);

app.use((req, res, next) => {
  console.log("middleware 1 called");
  req.mynum = "123456";
  next();
});
app.use((req, res, next) => {
  //db query
  //ac num info
  req.mynum = "1234567890";
  next();
});

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

app.get("/api/users", (req, res) => {
  res.setHeader("X-myaccount", "12342455323");
  console.log(req.headers);

  return res.json(users);
});

app.post("/api/users", async (req, res) => {
  const body = req.body;
  const result = await User.create({
    Name: body.Name,
    email: body.email,
  });

  return res.status(201).json({ msg: "user created", data: result });
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    const id = Number(req.params.id);
    const body = req.body;
    const user = users.find((user) => user.id === id);

    if (!user) {
      return res
        .status(404)
        .json({ status: "error", message: "User not found." });
    }

    Object.keys(body).forEach((key) => {
      user[key] = body[key];
    });

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
      if (err) {
        // Handle the error case
        return res
          .status(500)
          .json({ status: "error", message: "Failed to save user data." });
      }
      // Respond with success if no error occurred
      return res.json({ status: "success" });
    });
    //edit  user
  })
  .delete((req, res) => {
    const id = Number(req.params.id);

    // Filter out the user by ID
    const updatedUsers = users.filter((user) => user.id !== id);

    // Write the updated users array to the file
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(updatedUsers), (err) => {
      if (err) {
        // Handle the error case
        return res
          .status(500)
          .json({ status: "error", message: "Failed to save user data." });
      }
      // Respond with success if no error occurred
      return res.json({ status: "success" });
    });
  });

app.listen(port, () => console.log(`Listening on port ${port}`));
