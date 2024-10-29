const server = require("live-server");

const prams = {
  host: "localhost",
  port: 3000,
  open: false,
  root: "./client",
};

server.start(prams);
