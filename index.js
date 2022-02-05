const express = require("express");
const app = express();

const importDataCharacters = require("./data.json");
const importDataTitans = require("./db.json");

const charactersRoutes = require("./characters");
const titanRoutes = require("./titans");

const cors = require("cors");

app.use((req, res, next) => {
  //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
  res.header("Access-Control-Allow-Origin", "*");
  //Quais são os métodos que a conexão pode realizar na API
  res.header("Access-Control-Allow-Methods", "GET");
  app.use(cors());
  next();
});

app.get("/", (req, res) => {
  res.send(url("https://github.com/ClaudioDev233"));
});

app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});

app.get("/characters", (req, res) => {
  res.status(200).send(importDataCharacters);
});
app.get("/titans", (req, res) => {
  res.status(200).send(importDataTitans);
});

app.use("/characters", charactersRoutes);
app.use("/titans", titanRoutes);
