const express = require("express");
const router = express.Router();
const {
  getPrayer,
  getPrayers,
  addPrayer,
  deletePrayer,
} = require("../Controllers/prayerRequestController");

router.route("/").get(getPrayers).post(addPrayer);

router.route("/:id").get(getPrayer).delete(deletePrayer);

module.exports = router;
