module.exports = app => {
  const cms = require("../controllers/cms.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", cms.create);

  // Retrieve all cms
  router.get("/", cms.findAll);

  // Retrieve all published cms
  router.get("/published", cms.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", cms.findOne);

  // Update a Tutorial with id
  router.put("/:id", cms.update);

  // Delete a Tutorial with id
  router.delete("/:id", cms.delete);

  // Create a new Tutorial
  router.delete("/", cms.deleteAll);

  app.use("/api/cms", router);
};
