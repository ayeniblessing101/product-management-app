// This function sennd email
async function sendEmail(emailService, data) {
  try {
    await emailService.send(data);
  } catch (error) {
    if (error.response) {
      throw error.response.body;
    }
  }
}
module.exports = sendEmail;
