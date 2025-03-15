const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    projects: {
      type: Array,
      required: true,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Member = mongoose.model("Member", MemberSchema);

module.exports = Member;
