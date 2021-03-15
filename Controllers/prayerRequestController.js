const Prayer = require('../models/PrayerRequest');

exports.addPrayer = async (req, res)=> {
  try {
    const prayerInfo = await Prayer.create(req.body);
    if (prayerInfo) {
      res.status(201).json({
        status: "success",
        data: prayerInfo,
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: "Not Found",
    });
  }
}

exports.getPrayer = async (req, res)=> {
  try {
    const prayerInfo = await Prayer.findById(req.params.id);
    if (prayerInfo) {
      res.status(200).json({
        status: "success",
        data: prayerInfo,
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: "Not Found",
    });
  }
}

exports.getPrayers = async (req, res)=> {
  try {
    const requestsData = await Prayer.find();
    if (requestsData) {
      res.status(200).json({
        status: "success",
        length: requestsData.length,
        data: requestsData,
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: "Not Found",
    });
  }
}

exports.deletePrayer = async (req, res)=> {
  try {
    const prayerInfo = await Prayer.findByIdAndDelete(req.params.id);
    if (prayerInfo) {
      res.status(200).json({
        status: "success",
        data: prayerInfo,
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: "Not Found",
    });
  }
}