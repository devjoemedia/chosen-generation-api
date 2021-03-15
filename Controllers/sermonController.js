const Sermon = require("../models/Sermon");

exports.addSermon = async (req, res) => {
  try {
    const sermon = await Sermon.create(req.body);
    if (sermon) {
      res.status(201).json({
        status: "success",
        data: sermon,
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      status: "error",
      message: "Server Error",
    });
  }
};

exports.getSermon = async (req, res) => {
  try {
    const sermon = await Sermon.findById(req.params.id);
    if (sermon) {
      res.status(200).json({
        status: "success",
        data: sermon,
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: "Not Found",
    });
  }
};

exports.getSermons = async (req, res) => {
  try {
    const sermons = await Sermon.find();
    if (sermons) {
      res.status(200).json({
        status: "success",
        length: sermons.length,
        data: sermons,
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "sorry we could not get your request",
    });
  }
};

exports.updateSermon = async (req, res) => {
  try {
    const sermons = await Sermon.findByIdAndUpdate(req.params.id, req.body);
    if (sermons) {
      res.status(200).json({
        status: "success",
        data: sermons,
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "sorry we could not get your request",
    });
  }
};

exports.deleteSermon = async (req, res) => {
  try {
    const sermons = await Sermon.findByIdAndDelete(req.params.id, req.body);
    if (sermons) {
      res.status(200).json({
        status: "success",
        data: sermons,
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "sorry we could not get your request",
    });
  }
};
