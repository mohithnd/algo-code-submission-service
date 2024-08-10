const axiosInstance = require("../config/axiosInstance");
const { PROBLEM_ADMIN_SERVICE_URI } = require("../config/serverConfig");

async function fetchProblemDetails(problemId) {
  try {
    const response = await axiosInstance.get(
      `${PROBLEM_ADMIN_SERVICE_URI}/${problemId}`
    );
    console.log(response.data);
    if (response.success == false) {
      throw new Error("Problem ID Not Found");
    }
    return response.data;
  } catch (err) {
    console.log("Something Went Wrong While Fetching The Problem Details");
    console.log(err);
  }
}

module.exports = {
  fetchProblemDetails,
};
