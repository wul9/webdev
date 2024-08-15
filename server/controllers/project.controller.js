const Project = require("../models/project.model");
const Member = require("../models/member.model");

async function getProjects(req, res) {
  try {
    const projects = await Member.findById(req.params.id);
    console.log(projects);
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

// async function getProjectMembers(req, res) {
//     try {
//       const projects = await Member.findById(res.params.id);
//       res.status(200).json(projects);
//     } catch (err) {
//       res.status(500).json({ message: err });
//     }
//   }

module.export = { getProjects };
