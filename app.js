const express = require("express");
const bodyparser = require("body-parser");
const { readdata, writedata } = require("./utilities/jsonreader");
const truth = require("./truths").truth;
const app = express();

const cors = require("cors");
app.use(cors());
app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.send("Server is runnin' mate");
});

app.get("/truth", (req, res) => {
  const truth = readdata();
  res.send(truth);
});

app.get("/truth/random", (req, res) => {
  const truth = readdata();
  let id = Math.floor(Math.random() * truth.length);
  res.json(truth[id]);
});

app.get("/truth/:id", (req, res) => {
  let id = req.params.id;
  const truth = readdata();
  res.json(truth[id - 1]);
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Server is listening on http://localhost:${port}/`)
);
