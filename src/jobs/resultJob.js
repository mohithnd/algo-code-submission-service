const { sendPayload } = require("../apis/socketServerPayloadApi");
const SubmissionRepository = require("../repositories/submissionRepository");

const submissionRepository = new SubmissionRepository();

class ResultJob {
  constructor(payload) {
    this.payload = payload;
    this.name = this.constructor.name;
  }

  handle = async (job) => {
    console.log("handler of The Result Job Called");

    if (job) {
      const submission = await submissionRepository.getSubmission(
        this.payload.id
      );

      if (submission) {
        if (this.payload.stderr.length > 0) {
          submission.status = "RE";
        } else {
          submission.status = "Success";
        }

        submission.stdout = this.payload.stdout;
        submission.stderr = this.payload.stderr;

        let updatedSubmission = await submissionRepository.updateSubmission(
          this.payload.id,
          submission
        );

        console.log(updatedSubmission);

        sendPayload(updatedSubmission.userId, updatedSubmission);
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
