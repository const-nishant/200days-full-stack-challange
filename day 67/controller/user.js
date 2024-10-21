const User = require("../models/user");
async function handlePostAll(req, res) {
  const body = req.body;
  if (!body || !body.Name || !body.email || !body.gender) {
    return res
      .status(400)
      .json({ msg: "Name, email, and gender are required" });
  }

  try {
    const result = await User.create({
      Name: body.Name,
      email: body.email,
      gender: body.gender,
    });
    console.log(result);
    return res.status(201).json({ msg: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ msg: "Server error" });
  }
}

async function handleGetAll(req, res) {
  try {
    // Replace with actual logic to fetch all users from your data source (MongoDB)
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({ msg: "Server error" });
  }
}

async function handleGetById(req, res) {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
}

async function handlePatchById(req, res) {
  return res.json({
    status: "update operation pending",
  });
}

async function handleDeleteById(req, res) {
  return res.json({ status: "delete operation pending" });
}

module.exports = {
  handlePostAll,
  handleGetAll,
  handleGetById,
  handleDeleteById,
  handlePatchById,
};
