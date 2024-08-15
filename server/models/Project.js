const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    progress: {
      type: Number,
      required: true,
      default: 0,
    },
    tasks: {
      type: Array,
      required: false,
      default: [],
    },
    members: {
      type: Array,
      required: true,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
