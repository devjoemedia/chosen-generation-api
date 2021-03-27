const EventItem = require("../models/Event");
const multer = require("multer");
const path = require('path')

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname,'../uploads'));
    // cb(null, path.join(__dirname,'../../client/public/uploads'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname  + "-" + uniqueSuffix + '.jpg');
  },
});

exports.upload = multer({ storage: storage });

exports.addEvent = async (req, res) => {
  try {
    const theme = req.body.theme; 
    const host = req.body.host;
    const description = req.body.description;
    const startDate = req.body.startDate;
    const photo = req.file.filename;

    const item = await EventItem.create({theme,host,description,startDate,photo});
    if (item) {
      res.status(201).json({
        status: "success",
        data: item,
      });
    }
  } catch (err) {
    console.log(err.message);
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
    const theme = req.body.theme; 
    const host = req.body.host;
    const description = req.body.description;
    const startDate = req.body.startDate;
    const photo = req.file.filename;

    if(photo === null || photo === undefined) {
      const item = await EventItem.findByIdAndUpdate(req.params.id,{theme,host,description,startDate,photo});
      
    }else {
      const item = await EventItem.findByIdAndUpdate(req.params.id,{theme,host,description,startDate});

    }
    // const item = await EventItem.findByIdAndUpdate(req.params.id, req.body);
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
