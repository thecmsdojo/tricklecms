module.exports = app => {
  const apiRouter = require("express").Router();
  const apiController = require("./controllers/apiController.js");
  apiRouter.get("/version", apiController.version);

  app.use("/api", apiRouter);
};
