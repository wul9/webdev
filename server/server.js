const express = require("express");
const mongoose = require("mongoose");
// const Member = require("./models/member.model.js");
const cors = require("cors");
const requestRouter = require("./routes/request.js");
const projectsRouter = require("./routes/projects.js");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.get("/project-page/:id", async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    res.status(200).json(member);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

const uri = process.env.DBURI;

// const corsOptions = {
//   origin: "*",
//   optionSuccessStatus: 200,
// };

async function connectServer(port, onConnect, onError) {
  await app.listen(port, onConnect).on("error", onError);
}

async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB via mongoose");
  } catch {
    console.log("Error connecting to MongoDB via mongoose");
  }
}

async function run(port, onConnect, onError) {
  await connectDB();
  await connectServer(port, onConnect, onError);
}

run(
  3000,
  (err) => {
    console.log("connected to server");
  },
  (err) => {
    console.log("error connecting to server");
  }
).catch(console.dir);

app.use("/request", requestRouter);
app.use("/projects", projectsRouter);
