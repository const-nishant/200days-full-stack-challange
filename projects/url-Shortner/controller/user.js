const { v4: uuidv4 } = require("uuid");
const User = require("../models/user");
const { setUser } = require("../service/auth");

async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  return res.redirect("/");
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || user.password !== password) { // Password checking logic
      return res.render("login", {
        error: "Invalid email or password",
      });
    }

    const sessionId = uuidv4();
    setUser(sessionId, user);
    res.cookie("uid", sessionId);
    return res.redirect("/");
  } catch (error) {
    console.error("Error during login:", error);
    return res.render("login", {
      error: "An unexpected error occurred. Please try again.",
    });
  }
}



module.exports = {
  handleUserSignup,
  handleUserLogin,
};
