const express = require("express");
const router = express.Router();
const titans = require("./db.json");

router.get("/:titanId", (req, res, next) => {
  const id = req.params.characterId;
  res.send(titans.filter((titan) => titan.id == id));
});

module.exports = router;
