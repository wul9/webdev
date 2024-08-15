const express = require("express");
const router = express.Router();
const { OAuth2Client } = require("google-auth-library");
const dotenv = require("dotenv");

dotenv.config();

router.get("/", async (req, res) => {
  const oAuth2Client = new OAuth2Client(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.AUTH_REDIRECT_URI
  );

  const authorizeUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
      "openid",
    ],
    prompt: "consent",
  });
  res.json({ url: authorizeUrl });
});

module.exports = router;
