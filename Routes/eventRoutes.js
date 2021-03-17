const express = require("express");
const eventController = require("../Controllers/eventController");
const router = express.Router();

router.route("/").get(eventController.getEvents).post(eventController.upload.single('photo'), eventController.addEvent);

router
  .route("/:id")
  .get(eventController.getEvent)
  .patch(eventController.updateEvent)
  .delete(eventController.deleteEvent);

module.exports = router;
