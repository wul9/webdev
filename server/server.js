const express = require("express");
const mongoose = require("mongoose");
// const Member = require("./models/member.model.js");
// const projectsRoute = require("./routes/project.route.js");
const cors = require("cors");
const requestRouter = require("./routes/request.js");
const projectsRouter = require("./routes/projects.js");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

// const corsOptions = {
//   origin: "*",
//   optionSuccessStatus: 200,
// };

app.use(cors());

// app.get("/project-page/:id", async (req, res) => {
//   try {
//     const member = await Member.findById(req.params.id);
//     res.status(200).json(member);
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

const dbURI = process.env.DBURI;

async function connectDB() {
  await mongoose
    .connect(dbURI)
    .then(() => console.log("connected to db"))
    .catch((err) => console.log("error connecting to db"));
}

async function connectServer(port, onConnect, onError) {
  await app.listen(port, onConnect).on("error", onError);
}

connectDB().then(() => {
  connectServer(
    3000,
    (err) => {
      console.log("connected to server");
    },
    (err) => {
      console.log("error connecting to server");
    }
  );
});

app.use("/request", requestRouter);
app.use("/projects", projectsRouter);
