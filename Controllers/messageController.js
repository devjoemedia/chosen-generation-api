const Message = require('../models/Message');

exports.addMessage = async (req, res)=> {
  try {
    const message = await Message.create(req.body);
    if (message) {
      res.status(201).json({
        status: "success",
        data: message,
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Server Error", 
    });
  }
}

exports.getMessage = async (req, res)=> {
  try {
    const message = await Message.findById(req.params.id);
    if (message) {
      res.status(200).json({
        status: "success",
        data: message,
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: "Not Found",
    });
  }
}

exports.getMessages = async (req, res)=> {
  try {
    const messages = await Message.find();
    if (messages) {
      res.status(200).json({
        status: "success",
        length: messages.length,
        data: messages,
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: "Not Found",
    });
  }
}

exports.deleteMessage = async (req, res)=> {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);
    if (message) {
      res.status(200).json({
        status: "success",
        data: message,
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: "Not Found",
    });
  }
}