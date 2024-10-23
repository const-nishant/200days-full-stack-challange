const shortid = require("shortid");
const Url = require("../models/url");

async function generateNewShortUrl(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "url is required" });
  }
  const shortId = shortid(8);
  await Url.create({
    ShortId: shortId,
    redirectUrl: body.url,
    visitHistory: [],
  });
  return res.json({ id: shortId });
}

module.exports = {
  generateNewShortUrl,
};
