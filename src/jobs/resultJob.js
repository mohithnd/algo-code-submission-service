const { Job } = require("bullmq");
const Submission = require("../models/submissionModel");
const { sendPayload } = require("../apis/socketServerPayloadApi");

class ResultJob {
  constructor(payload) {
    this.payload = payload;
    this.name = this.constructor.name;
  }

  handle = async (job) => {
    console.log("handler of The Result Job Called");

    if (job) {
      const submission = await Submission.findById(this.payload.id);

      if (submission) {
        if (this.payload.stderr.length > 0) {
          submission.status = "RE";
        } else {
          submission.status = "Success";
        }

        submission.stdout = this.payload.stdout;
        submission.stderr = this.payload.stderr;
        await submission.save();

        console.log(submission);

        sendPayload(submission.userId, submission);
      }
    }
  };

  failed = (job) => {
    console.log("Result Job Failed:-");

    if (job) {
      console.log(job.id);
    }
  };
}

module.exports = ResultJob;
