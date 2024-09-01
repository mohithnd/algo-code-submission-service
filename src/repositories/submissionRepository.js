const Submission = require("../models/submissionModel");

class SubmissionRepository {
  constructor() {
    this.submissionModel = Submission;
  }

  async createSubmission(submission) {
    const response = await this.submissionModel.create(submission);
    return response;
  }

  async getSubmission(submissionId) {
    const response = await this.submissionModel.findById(submissionId);
    return response;
  }

  async updateSubmission(submissionId, data) {
    const response = await this.submissionModel.findByIdAndUpdate(
      submissionId,
      data,
      {
        new: true,
      }
    );
    return response;
  }
}

module.exports = SubmissionRepository;
