const fs = require("fs");
function logReqRes(filename) {
  return (req, res, next) => {
    console.log("middleware 1 is running");
    fs.appendFile(filename, `\n${Date.now()}: ${req.ip} \n`, (err,data) => {
      next();
    });
  };
}

module.exports = {
  logReqRes,
};
