const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const marioModel = require("./models/marioChar");

// Middleware
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// your code goes here

app.get("/mario", async (req, res) => {
  try {
    const mario = await marioModel.find();
    console.log(req.body);
    res.json({
      status: "success",
      result: mario,
    });
  } catch (e) {
    res.json({
      status: "failed",
      message: e.message,
    });
  }
});
app.get("/mario/:id", async (req, res) => {
  try {
    const mario = await marioModel.findById({ _id: req.params.id });
    console.log(req.body);
    res.json({
      status: "success",
      result: mario,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
});
app.post("/mario", async (req, res) => {
  try {
    const mario = await marioModel.create(req.body);
    console.log(req.body);
    res.status(201).json({
      result: mario,
    });
  } catch (e) {
    res.status(400).json({
      message: "Either name or weight is missing",
    });
  }
});
app.patch("/mario/:id", async (req, res) => {
  try {
    await marioModel.updateOne({ _id: req.params.id }, req.body);
    const mario = await marioModel.findOne({ _id: req.params.id });
    console.log(req.body);
    res.json({
      status: "success",
      result: mario,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
});
app.delete("/mario/:id", async (req, res) => {
  try {
    await marioModel.deleteOne({ _id: req.params.id });
    console.log(req.body);
    res.status(200).json({
      message: "character deleted",
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
});
module.exports = app;
