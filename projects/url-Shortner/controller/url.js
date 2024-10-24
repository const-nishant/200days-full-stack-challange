const shortid = require("shortid");
const Url = require("../models/url");

async function generateNewShortUrl(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "url is required" });
  }
  const shortId = shortid.generate(); // Generate a unique short ID
  await Url.create({
    ShortId: shortId,
    redirectUrl: body.url,
    visitHistory: [],
  });
  // Pass the shortId to the frontend EJS file as 'id'
  return res.render("frontend", { id: shortId });
}

module.exports = {
  generateNewShortUrl,
};
