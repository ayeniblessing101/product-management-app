const DatauriParser = require("datauri/parser");
const path = require("path");

const parser = new DatauriParser();

const dataUri = (req) => {
  parser.format(path.extname(req.originalname).toString(), req.buffer);
  return parser.content;
};

module.exports = dataUri;
