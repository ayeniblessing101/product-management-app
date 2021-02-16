const mongoose = require("mongoose");

mongoose.connect(process.env.CLOUD_MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
