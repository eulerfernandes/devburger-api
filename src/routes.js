const { Router } = require("express");
const { request, response } = require("./app");

const routes = new Router();

routes.get("/", (request, response) => {
  return response.status(200).json({ message: "hello world!" });
});

module.exports = routes;
