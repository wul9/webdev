const express = require("express");
const router = express.Router();
const { OAuth2Client } = require("google-auth-library");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Member = require("../models/Member.js");
const Product = require("../models/Project.js");
const Project = require("../models/Project.js");

dotenv.config();

async function getAuthCredentials(authCode) {
  // console.log("authCode: " + authCode);
  const oAuth2Client = new OAuth2Client(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.AUTH_REDIRECT_URI
  );
  try {
    const { tokens } = await oAuth2Client.getToken(authCode);
    oAuth2Client.setCredentials(tokens);
  } catch (error) {
    console.log(error);
  }
  return oAuth2Client.credentials;
}

async function findAndUpdateUser(filter, update, options) {
  return Member.findOneAndUpdate(filter, update, options);
}

async function findAndModifyUser(filter, update, options) {
  return Member.findOneAndModify(filter, update, options);
}

router.post("/", async function (req, res) {
  try {
    //fix redirect issues upon cancellation or invalid login
    if (req.query.error) {
      res.redirect("http://localhost:5173");
      return;
    }

    ({ access_token, id_token } = await getAuthCredentials(req.body.authCode));

    const user = jwt.decode(id_token); //payload

    //need to verify if google account
    if (!user.email_verified) {
      res.status(403).send("User is not verified");
    }
    // console.log("tokens", access_token, id_token);
    console.log("Decoded User Email:", user.email);
    // console.log(user);
    const { given_name, family_name, picture, email } = user;
    const userDoc = await Member.exists({ email: user.email });

    res.json(
      userDoc
        ? await Member.findOne({ email: user.email })
        : await Member.create({
            firstName: given_name,
            lastName: family_name,
            profilePic: picture,
            email: email,
            projects: [],
          })
    );
  } catch (error) {
    console.log(error);
    // const { access_token, id_token } = await getAuthCredentials(
    //   req.body.authCode
    // );
    // console.log("access_token: " + access_token);
    // console.log("id_token: " + id_token);
  }
});

router.get("/", async function (req, res) {
  const user = jwt.decode(id_token);
  const userDoc = await Member.findOne({ email: user.email }); //edit later
  // console.log("user doc in get request: " + userDoc);
  // console.log("access_token in get request: " + access_token);
  // console.log("id_token: " + id_token);
  res.json(userDoc);
});

router.get("/:id", async function (req, res) {
  const project = await Project.findById(req.params.id);
  res.json(project);
});

router.get("/:id/members", async function (req, res) {
  const project = await Project.findById(req.params.id);
  const members = project.members;
  const memberDocs = await Promise.all(
    project.members.map((memberId) => Member.findById(memberId.toString()))
  );
  // console.log(memberDocs);
  res.json(memberDocs);
});

module.exports = router;
