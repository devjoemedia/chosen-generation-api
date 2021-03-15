const EventItem = require("../models/Event");

exports.addEvent = async (req, res) => {
  try {
    const item = await EventItem.create(req.body);
    if (item) {
      res.status(201).json({
        status: "success",
        data: item,
      });
    }
  } catch (err) {
    console.log(err.message)
    res.status(500).json({
      status: "error",
      message: "sorry your request was not completed",
    });
  }
};

exports.getEvent = async (req, res) => {
  try {
    const item = await EventItem.findById(req.params.id);
    if (item) {
      res.status(200).json({
        status: "success",
        data: item,
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: "Not Found",
    });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const items = await EventItem.find();
    if (items) {
      res.status(200).json({
        status: "success",
        length: items.length,
        data: items,
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "sorry your request was not completed",
    });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const item = await EventItem.findByIdAndUpdate(req.params.id, req.body);
    if (item) {
      res.status(200).json({
        status: "success",
        data: item,
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "sorry your request was not completed",
    });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const item = await EventItem.findByIdAndDelete(req.params.id);
    if (item) {
      res.status(200).json({
        status: "success",
        data: item,
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "sorry your request was not completed",
    });
  }
};
