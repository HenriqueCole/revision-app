const express = require("express");
const router = express.Router();

router.post("/books", async (req, res) => {
  const data = req.body;
  const result = await crud.post("Books", undefined, data);
  res.send(result);
});

module.exports = router;
