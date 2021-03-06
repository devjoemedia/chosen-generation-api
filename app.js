const express = require("express");
const dotenv = require("dotenv");
const sermonRoutes = require("./Routes/sermonRoutes");
const eventRoutes = require("./Routes/eventRoutes");
const prayerRoutes = require("./Routes/prayerRequestRoutes");
const messageRoutes = require("./Routes/messageRoutes");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

dotenv.config({ path: "./config.env" });

// connectDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err.message));

const app = express();

// Enable CORS
app.use(cors());

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

app.use("/api/v1/sermons", sermonRoutes);
app.use("/api/v1/events", eventRoutes);
app.use("/api/v1/prayer-requests", prayerRoutes);
app.use("/api/v1/messages", messageRoutes);

// Static folder
app.use(express.static(path.join(__dirname, "./build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(port, () => console.log(`server started on Port: ${port}`));
