const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "User Id For The Submission Is Missing"],
  },
  problemId: {
    type: String,
    required: [true, "Problem Id For The Submission Is Missing"],
  },
  code: {
    type: String,
    required: [true, "Code For The Submission Is Missing"],
  },
  language: {
    type: String,
    required: [true, "Programming Language For The Submission Is Missing"],
  },
  status: {
    type: String,
    enum: ["Pending", "Success", "RE", "TLE", "MLE", "WA"],
    default: "Pending",
  },
  stdout: {
    type: String,
  },
  stderr: {
    type: String,
  },
});

module.exports = mongoose.model("Submission", submissionSchema);
