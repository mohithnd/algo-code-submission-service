const axiosInstance = require("../config/axiosInstance");
const { SOCKET_SERVER_PAYLOAD_URI } = require("../config/serverConfig");

async function sendPayload(userId, payload) {
  try {
    const response = await axiosInstance.post(SOCKET_SERVER_PAYLOAD_URI, {
      userId,
      payload,
    });
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(
      "Something Went Wrong While Sending The Payload To Socket Server"
    );
    console.log(err);
  }
}

module.exports = {
  sendPayload,
};
