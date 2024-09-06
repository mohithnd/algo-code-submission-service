const { fetchProblemDetails } = require("../apis/problemAdminApi");
const SubmissionCreationError = require("../errors/submissionCreationError");
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
      throw new SubmissionCreationError(
        "Failed To Create A Submission In The MongoDB Database."
      );
    }

    const problemAdminApiResponse = await fetchProblemDetails(
      submissionEntry.problemId
    );

    if (!problemAdminApiResponse) {
      throw new SubmissionCreationError("Failed To Create A Submission");
    }

    const codeStubs = problemAdminApiResponse.data.codeStubs;
    let currLangCodeStub;
    for (const stub of codeStubs) {
      if (stub.language === submissionEntry.language) {
        currLangCodeStub = stub;
        break;
      }
    }

    if (!currLangCodeStub) {
      throw new SubmissionCreationError("Failed To Create A Submission");
    }

    const submissionPayload = {
      id: submissionEntry._id,
      problemId: submissionEntry.problemId,
      code:
        currLangCodeStub.startSnippet +
        submissionEntry.code +
        currLangCodeStub.endSnippet,
      language: submissionEntry.language,
      testCases: problemAdminApiResponse.data.testcases,
    };

    const response = await submissionProducer(submissionPayload);

    return { queueResponse: response, submissionEntry };
  }
}

module.exports = SubmissionService;
