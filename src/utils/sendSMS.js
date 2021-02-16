async function sendSMS(smsService, data) {
  const sms = smsService.SMS;
  try {
    const response = await sms.send(data);
    return response;
  } catch (error) {}
}

module.exports = sendSMS;
