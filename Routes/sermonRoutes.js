const express = require("express");
const sermonController = require("../Controllers/sermonController");

const router = express.Router();

router
  .route("/")
  .get(sermonController.getSermons)
  .post(sermonController.addSermon);

router
  .route("/:id")
  .get(sermonController.getSermon)
  .patch(sermonController.updateSermon)
  .delete(sermonController.deleteSermon);

module.exports = router;
