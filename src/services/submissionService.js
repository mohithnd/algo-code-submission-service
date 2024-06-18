const submissionProducer = require("../producers/submissionProducer");

class SubmissionService {
  constructor(submissionRepository) {
    this.submissionRepository = submissionRepository;
  }

  async addSubmission(submission) {
    const submissionEntry = await this.submissionRepository.createSubmission(
      submission
    );
    if (!submissionEntry) {
      // TODO: Add Error Handling
      throw { message: "Not Able To Create Submission" };
    }

    const response = await submissionProducer({
      id: submissionEntry._id,
      code: submissionEntry.code,
      language: submissionEntry.language,
      inputCases: submission.testCases,
    });
    return { queueResponse: response, submissionEntry };
  }
}

module.exports = SubmissionService;
