const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();

const port = 3000;

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

// app.get("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id);
//   return res.json(user);
// });

// app.patch("/api/users/:id", (req, res) => {
//   //edit  user
//   return res.json({ status: "pending" });
// });

// app.delete("/api/users/:id", (req, res) => {
//   //delete user
//   return res.json({ status: "pending" });
// });

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.post("/api/users", (req, res) => {
  //create new user
  return res.json({ status: "pending" });
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    //edit  user
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    //delete user
    return res.json({ status: "pending" });
  });

app.listen(port, () => console.log(`Listening on port ${port}`));
