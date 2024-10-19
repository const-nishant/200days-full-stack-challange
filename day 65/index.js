const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();

const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

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

app.post("/api/users", (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.ip_address
  ) {
    return res.status(400).json({ msg: "Missing required fields" });
  }
  // Add the new user to the users array
  users.push({ ...body, id: users.length + 1 });

  // Write the updated users array to the JSON file
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
    if (err) {
      // Handle the error case
      return res.status(500).json({
        status: "error",
        message: "Failed to save user data.",
      });
    }
    // Respond with success if no error occurred
    return res.json({ status: "success" });
  });
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
