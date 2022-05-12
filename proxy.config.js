const config = {
  "/api/": {
    target: "http://" + process.env.BACKEND_HOST + ":8081",
    secure: false,
    logLevel: "debug",
  },
};
module.exports = config;
