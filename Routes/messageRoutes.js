const express = require("express");
const router = express.Router();
const messageController = require("../Controllers/messageController");

router
  .route("/")
  .get(messageController.getMessages)
  .post(messageController.addMessage); 

router
  .route("/:id")
  .get(messageController.getMessage)
  .delete(messageController.deleteMessage);

module.exports = router;
